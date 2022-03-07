function reverse(arr) {
    var reverseArr= [];
    for (var i=0; i<arr.length; i++) {
        reverseArr[arr.length - (i+1)] = arr[i];
    }
    return reverseArr;
}

var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]
