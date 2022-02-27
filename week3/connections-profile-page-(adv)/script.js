function diffName() {
    document.getElementById("name").innerText = "Mary Brooks";
}

function removeRequest(id,element) {
    var id_name= id+"";
    var request = document.getElementById(id_name);
    x.parentNode.removeChild(request);
    console.log(element);
    document.querySelector(".badge").innerText--;
    if (element.src.match("icons/accept-circle.png")) {
        document.querySelector("#connections").innerText++;
    }
}
