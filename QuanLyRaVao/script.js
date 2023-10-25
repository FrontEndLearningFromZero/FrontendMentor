// Global variables
var jsonData = ""

// ======================================================================
// display Date
let date = new Date();
let localeTime = date.toLocaleDateString("en-US");
let day = date.getDay() + 1;

let formattedTime = "Thứ " + day + ", " + localeTime;
document.getElementById("time").innerHTML = formattedTime;

// ======================================================================
// upload file
document.getElementById('uploadBtn')
        .addEventListener('click', function() {
          var file = document.getElementById("file_upload").files
          // check file uploaded or not
          if(file.length == 0) {
            alert('Please upload file')
            return
          }

          var filename = file[0].name
          var extension = filename.substring(filename.lastIndexOf(".")).toUpperCase()
          if(extension == ".XLS" || extension == ".XLSX") {
            excelFiletoJSON(file[0])
          } else {
            alert('Please upload Excel file')
          }

        })

// ======================================================================
// Convert to JSON
function excelFiletoJSON(file) {
    try {
        var reader = new FileReader()
        reader.readAsBinaryString(file)
        reader.onload = function(e) {
            var data = e.target.result
            var workbook = XLSX.read(data, {type: 'binary'})
            var firstSheetName = workbook.SheetNames[0]

            // read only 1st sheet
            var data = XLSX.utils.sheet_to_json(workbook.Sheets[firstSheetName])

            // Store json result into var
            jsonData = data
        }
    } catch {
        console.error(e)
    }
}

// ======================================================================
function displayJSONToHtmlTable(jsonData)
{
}

// ======================================================================
// get data from user's input
document.getElementById('bienSoXe')
        .addEventListener('keypress', function(event) {
          if(event.key === 'Enter') {
            event.preventDefault()
            findData(this.value.toString())
          }
        })

// ======================================================================
// query
function findData(data) {
  var check = true
  for(var i=0; i<jsonData.length; i++) {
    if(data == jsonData[i]["Biển số xe"]) {
      displayData(jsonData[i])
      return
    } else {
      check = false
    }
  }
  if (!check) {
    alert("Không Tìm Thấy/Not found")
  }
}

// ======================================================================
// display
function displayData(data) {
  var htmlData = document.getElementById("display_excel_data")
  
  var tmp = parseFloat(data["Giờ dự kiến"]) * 12 / 0.5
  var decimal = parseFloat(tmp) - parseInt(tmp)
  if(decimal >= 0.5) {
    data["Giờ dự kiến"] = Math.ceil(tmp) + ':00:00'
  } else {
    data["Giờ dự kiến"] = Math.floor(tmp) + ':00:00'
  }

  // data["Xe Vào"] = '<input type="checkbox" id="xevao" />;'
  // data["Xe Ra"] = '<input type="checkbox" id="xevao" />;'
  data["Xe Vào"] = '<input type="checkbox" class="xevao" />&nbsp;'
  data["Xe Ra"] = '<input type="checkbox" class="xera" />&nbsp;'
  data["Thời gian vào"] = ""
  data["Thời gian ra"] = ""
  htmlData.innerHTML += '<tr><td>' + data["Biển số xe"] + '</td><td>' + data["Tài xế"] + '</td><td>' + data["Nhà vận chuyển"] + '</td><td>' + data["Giờ dự kiến"] + '</td><td>' + data["Xe Vào"] + '</td><td>'+ data["Thời gian vào"] + '</td><td>' + data["Xe Ra"] + '</td><td>' + data["Thời gian ra"] +'</td></tr>' 

  addEventToElement('xevao')
  addEventToElement('xera')
}

// ======================================================================
// check "Xe Vao" if element exist or not
// and show time then ticking
function addEventToElement(id) {
  if(document.getElementsByClassName(id)) {
    var param = document.getElementsByClassName(id)
    for(var i=0; i<param.length; i++) {
      param[i].addEventListener('click', function() {
        this.classList.toggle('active')
        if(this.checked) {
          alert(this.checked)
        } else {
          alert(this.checked)
        }
      })
    }

  } else {
    document.getElementsByClassName(id).removeEventListener('click')
  }
}

// ======================================================================
// allow to edit "Xe Vao"


// ======================================================================

// ======================================================================

// ======================================================================

// ======================================================================

// ======================================================================
