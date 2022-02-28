/* 
* function to display alert upon clicking on cities.
*/
function displayAlert(element) {
    alert("Loading weather report....");
}

/* 
* function to remove cookies upon clicking "I Accept button".
*/
var cookies = document.querySelector(".cookies");

function removeCookie(){
    cookies.remove();
}

/* 
* function changes temprature into units upon a option selection
*/
var temp= document.querySelectorAll(".temp");

function convertTemp() {
    if (document.getElementById('options').value == "f") {
        converttoF();
    } else if (document.getElementById('options').value == "c") {
        converttoC();
    }
}
function converttoF() {
    for (i=0; i < temp.length; i++){
        temp[i].innerText= Math.floor(temp[i].innerText* 9 / 5+32);
    }
}
function converttoC() {
    for(i=0; i < temp.length; i++) {
        temp[i].innerText= Math.round((temp[i].innerText-32)* 5/9);
    }
}









