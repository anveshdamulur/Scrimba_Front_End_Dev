let btnContact = document.getElementById("btn-contact")
console.log(btnContact)
let btnClose = document.getElementById("btn-close")
console.log(btnClose)

let overLay = document.getElementById("overlay");
console.log(overLay)
btnClose.addEventListener("click", function(){
    overLay.style.display = "none"
}, false)

btnContact.addEventListener("click", function(){
    overLay.style.display = "block"
}, false)