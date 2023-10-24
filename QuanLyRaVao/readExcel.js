// Upload excel file
document.getElementById('uploadBtn')
        .addEventListener('click', function upload() {
                var files = document.getElementById('file_upload').files
                if(files.length == 0) {
                    alert("Please choose any file")
                    return;
                }

                var filename = files[0].name
                var extension = filename.substring(filename.lastIndexOf(".")).toUpperCase()
                if(extension == '.XLS' || extension == '.XLSX') {
                    // Read Excel file & convert to Json
                    excelFiletoJSON(files[0])
                } else {
                    alert("Please select an excel file")
                }
            }
        )
// Read Excel file & convert to Json
function excelFiletoJSON(file) {
    try {
        var reader = new FileReader()
        reader.readAsBinaryString(file)
        reader.onload = function(e) {
            var data = e.target.result
            var workbook = XLSX.read(data, {type: 'binary'})
            var firstSheetName = workbook.SheetNames[0]

            // read only 1st sheet
            var jsonData = XLSX.utils.sheet_to_json(workbook.Sheets[firstSheetName])

            // display json result into HTML table
            displayJSONToHtmlTable(jsonData)
        }
    } catch {
        console.error(e)
    }
}

// Json to HTML table
function displayJSONToHtmlTable(jsonData) {
    var table = document.getElementById('display_excel_data')
    if(jsonData.length > 0) {
        // var htmlData = '<thead><tr><th>Biển số xe</th><th>Tài xế</th><th>Nhà Vận Chuyển</th><th>Giờ dự kiến</th></tr></thead>'
        var htmlData = ""
        for(var i=0; i<jsonData.length; i++) {
            var row = jsonData[i]
            htmlData += '<tr><td>' + row["Biển số xe"] + 
                        '</td><td>' + row["Tài xế"] + 
                        '</td><td>' + row["Nhà Vận Chuyển"] + 
                        '</td><td>' + row["Giờ dự kiến"] + '</td></tr>'
        }
        table.innerHTML += htmlData
    } else {
        table.innerHTML = "Empty File"
    }
}