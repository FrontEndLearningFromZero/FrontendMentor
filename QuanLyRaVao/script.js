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
let localeTime = date.toLocaleDateString("en-US");
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
var a = false;
for (var i = 0; i < bsx.length; i++) {
  bsx[i].addEventListener("change", function () {
    this.classList.toggle("active");
    if (this.value != "") {
        // "Xe Vao" of active row is editable
        a = true;
        console.log(a)
    }
  });
}

// var b = false;
// for (var i = 0; i < tx.length; i++) {
//     tx[i].addEventListener("change", function () {
//       this.classList.toggle("active");
//       if (this.value != "") {
//         // "Xe Vao" of active row is editable
//         b = true;
//         console.log(b)
//       }
//     });
// }

// "Thoi gian vao" get & display time when ticking
for (let i = 0; i < tx.length; i++) {
    xevao[i].addEventListener("change", function () {
      this.classList.toggle("active");
      if (this.checked) {
        // "Xe Vao" of active row is editable
        var tmp = new Date(Date.now());
        thoigianvao[i].value = tmp.toLocaleTimeString();
      } else {
        thoigianvao[i].value = "";
      }
    });
}

// "Thoi gian ra" get & display time when ticking
for (let i = 0; i < tx.length; i++) {
    xera[i].addEventListener("change", function () {
      this.classList.toggle("active");
      if (this.checked) {
        // "Xe Ra" of active row is editable
        var tmp = new Date(Date.now());
        thoigianra[i].value = tmp.toLocaleTimeString();
      } else {
        thoigianra[i].value = "";
      }
    });
}

// ======================================================================

// ======================================================================

// ======================================================================

// ======================================================================

// ======================================================================
