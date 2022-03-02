for (var num = 1; num <= 100; num++) {
    if (num % 5 == 0 && num % 3 == 0){
        console.log("FizzBuzz");
    } else if(num % 3 == 0) {
        console.log("Fizz"); 
    } else if (num % 5 == 0) {
        console.log("buzz");
    } else {
        console.log(num);
    }
}