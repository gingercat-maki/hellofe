import logo1 from '../images/lark-logo.jpeg'
import logo2 from '../images/lark-logo-v2.jpeg'

// title, main-pic logic
let titleToggle = true
let titleEn = "LARK is amazing!"
let titleCn = "飞书, 做的很不错!"

let picToggle = true
let mainPics = [logo1, logo2]
let picId = "main-pic"
let attributeName = "src"

setInterval(function(){
    let myHeading = document.querySelector('#main-title');
    if (titleToggle) {
        myHeading.textContent = titleEn;
        document.getElementById(picId).setAttribute(attributeName, mainPics[1])
        titleToggle = false;
    }else{
        myHeading.textContent = titleCn;
        document.getElementById(picId).setAttribute(attributeName, mainPics[0])
        titleToggle = true;
    }
}, 3000);

// user information record
function recordName() {
    var name = document.getElementById("name").value
    console.log("get name "+name)
    if(!name || name === null) {
        alert("please input correct name")
    }else{
        console.log("enters store name "+name)
        window.localStorage.setItem('name', name);
    }
}
document.getElementById("name-button").onclick = recordName

function welcome() {
        let name = window.localStorage.getItem('name');
    if (!name || name === null) {
        document.getElementById("welcome-old").innerHTML = "Welcome to our site !"
    }else{
        document.getElementById("welcome-old").innerHTML = "Hi <b>"+name+"</b>, nice to meet you !"
    }
}
welcome()

