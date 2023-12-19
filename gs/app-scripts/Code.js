const url = "https://docs.google.com/spreadsheets/d/1FzdD3x2xVWSc42MxaPCPiLYENN75WoSuXWPfVPXBs2k/edit#gid=0"
const spreadsheets = SpreadsheetApp.openByUrl(url)
const sheet = spreadsheets.getSheetByName("Sangnnbs")
function Log(){
  let data = sheet.getDataRange().getValues()
  Logger.log(data)
}
function TestWrite(){
  sheet.appendRow(['Cotton Sweatshirt XL', 'css004']);
}
function doGet() {

  return HtmlService
          .createTemplateFromFile('index')
          .evaluate()
          .addMetaTag('viewport', 'width=device-width, initial-scale=1')
          .setTitle('Web App')
          .setFaviconUrl('https://img.icons8.com/windows/452/mandalorian.png') ;
}

function require(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}