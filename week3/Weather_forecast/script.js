/* 
* function to display alert upon clicking on cities.
*/
function displayAlert() {
    alert("Loading weather report....");
}

/* 
* function to remove cookies upon clicking "I Accept button".
*/
function removeCookie(){
    var cookies = document.querySelector(".cookies");
    cookies.remove();
}

/* 
* function changes temprature into units upon a option selection
*/
function convertTemp() {
    if (document.getElementById('options').value == "f") {
        converttoF();
    } else if (document.getElementById('options').value == "c") {
        converttoC();
    }
}
function converttoF() {
    var temp= document.querySelectorAll(".temp");
    for (i=0; i < temp.length; i++){
        temp[i].innerText= Math.floor(temp[i].innerText* 9 / 5+32);
    }
}
function converttoC() {
    var temp= document.querySelectorAll(".temp");
    for(i=0; i < temp.length; i++) {
        temp[i].innerText= Math.round((temp[i].innerText-32)* 5/9);
    }
}









