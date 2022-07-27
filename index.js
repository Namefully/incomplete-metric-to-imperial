/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const userNum = document.getElementById("user-num")
const convertBtn = document.getElementById("Convert-btn")
const conversion = document.getElementById("conversion")
const conversion2 = document.getElementById("conversion2")
const conversion3 = document.getElementById("conversion3")

const foot = 3.281
convertBtn.addEventListener("click",function(){
conversion.textContent = userNum.value * foot

const gallon = 4.546092
conversion2.textContent = userNum.value / gallon

const pound = 2.20462262
conversion3.textContent = userNum.value * pound
})