var like= [9,12,9];

var first = document.getElementById("0");
var second = document.getElementById("1");
var third= document.getElementById("2");


/*Solution 1 : creating three diffrent functions for each like button
in HTML write it as: onclick= "add1to0(document.getElementById('0'))" */
function addButton1(id) {
    like[0]++;
    first.innerText= like[0];
}

function addButton2(id) {
    like[1]++;
    second.innerText= like[1];
}

function addButton3(id) {
    like[2]++;
    third.innerText= like[2];
}


/* solution 2: creating a single function using "if" and "else if" condition;
var first, second and third is declared in the beginning of the page */
function addWithIf(id) {
    if (id == 0) {
        var first = document.getElementById("0");
        like[0]++;
        first.innerText = like[0];
    } else if (id == 1) {
        var second = document.getElementById("1");
        like[1]++;
        second.innerText = like[1];
    } else if (id == 2) {
        var first = document.getElementById("2");
        like[2]++;
        first.innerText = like[2];
    }
}

/* USED THIS IN THE HTML
solution 3: making keyword "id" a string and using it as a index of an array */
function add(id) {
    var textId = id + ""; 
    var counterHTML = document.getElementById(textId);
    like[id]++;
    counterHTML.innerText = like[id];
}
