let date = new Date()
let localeTime = date.toLocaleDateString('en-US') //document.getElementById('time').innerHTML = 
let day = date.getDay() + 1

let formattedTime = "Thứ " + day + ", " + localeTime
document.getElementById('time').innerHTML = formattedTime

let auth = ""

document.getElementById('auth').addEventListener('change', () => {
    auth = document.getElementById('auth').value
    console.log(auth)
})
console.log(auth)
if (auth == "admin") {
    var e = document.getElementsByClassName("field")
    for (let i = 0; i < e.length; i++) {
        e[i].disabled = true
    }
}


