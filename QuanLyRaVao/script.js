// Global variables
var jsonData = ""
var column = 8
var columnName = ["Biển số xe", "Tài xế", "Nhà vận chuyển", "Giờ dự kiến", "Xe vào", "Thời gian vào", "Xe ra", "Thời gian ra"]
var classNameForField = ["bienSoXe", "taiXe", "nhaVanChuyen", "gioDuKien", "xeVao", "thoiGianVao", "xeRa", "thoiGianRa"]

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
            for(var i=0; i<data.length; i++) {
              data[i]["Xe vào"] = ''
              data[i]["Thời gian vào"] = ''
              data[i]["Xe ra"] = ''
              data[i]["Thời gian ra"] = ''
            }
            jsonData = data
        }
    } catch {
        console.error(e)
    }
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

  createDataInTable(htmlData, data)

  // addEventToElement('xevao')
  // addEventToElement('xera')
}

// ======================================================================
function createDataInTable(table, data) {
  var row = document.createElement('tr')
  var field = ''
  for(var c = 0; c < column; c++) {
    if(classNameForField[c] == 'xeVao' || classNameForField[c] == 'xeRa') {
      field = document.createElement('input')
      field.type = 'checkbox'
      field.className = classNameForField[c]
      field.innerHTML = data[columnName[c]]
    } else {
      field = document.createElement('p')
      field.className = classNameForField[c]
      field.style.textAlign = 'center'
      field.innerHTML = data[columnName[c]]
    }

    var cell = document.createElement('td')
    cell.appendChild(field)
    row.appendChild(cell)
    table.appendChild(row)
  }
}



// ======================================================================
// check "Xe Vao" if element exist or not
// and show time then ticking
function addEventToElement(className) {
  if(document.getElementsByClassName(className)) {
    var param = document.getElementsByClassName(className)
    for(var i=0; i<param.length; i++) {
      param[i].add
      param[i].addEventListener('click', function() {
        this.classList.toggle('active')
        if(this.checked) {
          // alert(this.checked)
          displayTime(className, (i-1))
        } else {
          // alert(this.checked)
        }
      })
    }
  } else {
    document.getElementsByClassName(id).removeEventListener('click')
  }
}

// ======================================================================
// Display time
function displayTime(className, count) {
  if(document.getElementsByClassName('thoigianvao')) {
    var param = document.getElementsByClassName('thoigianvao')
    param[count].value = '01.00.00'
  }
}


// ======================================================================
// allow to edit "Xe Vao"


// ======================================================================

// ======================================================================

// ======================================================================

// ======================================================================

// ======================================================================
