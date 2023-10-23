var bsx = document.getElementsByClassName("bsx");
var tx = document.getElementsByClassName("tx");
var nvc = document.getElementsByClassName("nvc");
var dukien = document.getElementsByClassName("dukien");
var xevao = document.getElementsByClassName("xevao");
var thoigianvao = document.getElementsByClassName("thoigianvao");
var xera = document.getElementsByClassName("xera");
var thoigianra = document.getElementsByClassName("thoigianra");

// display Date
let date = new Date();
let localeTime = date.toLocaleDateString("en-US"); //document.getElementById('time').innerHTML =
let day = date.getDay() + 1;

let formattedTime = "Thứ " + day + ", " + localeTime;
document.getElementById("time").innerHTML = formattedTime;

// ======================================================================
// authorization
let auth = "admin";

window.addEventListener("load", () => {
  auth = document.getElementById("auth").defaultValue;
  var e = document.getElementsByClassName("field");
  if (auth == "admin") {
    for (let i = 0; i < e.length; i++) {
      e[i].disabled = false;
    }
  } else {
    for (let i = 0; i < tx.length; i++) {
      tx[i].disabled = true;
      nvc[i].disabled = true;
      dukien[i].disabled = true;
      xevao[i].disabled = true;
      thoigianvao[i].disabled = true;
      xera[i].disabled = true;
      thoigianra[i].disabled = true;
    }
  }
});

// ======================================================================
// allow to edit "Xe Vao"
for (var i = 0; i < bsx.length; i++) {
  bsx[i].addEventListener("change", function () {
    this.classList.toggle("active");
    if (this.value != "") {
        // "Xe Vao" of active row is editable
        xevao[i].disabled = false
    }
  });
}
// ======================================================================

// ======================================================================

// ======================================================================

// ======================================================================

// ======================================================================
