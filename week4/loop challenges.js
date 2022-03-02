/* Proint odds
 This for loop console.log all of the odd values from 1 up to 20 */
for (var i = 1; i < 21; i = i+2) {
    console.log(i);
}

/* Decreasing Multiples of 3
This for loop console.log all of the values that are evenly 
divisible by 3 from 100 down to 0 */
for (var i= 100; i >= 0; i--){
    if(i % 3 == 0) {
        console.log(i);
    }
}

/* Print Sequence
console.log the values in this sequence 4, 2.5, 1, -0.5, -2, -3.5. */
for (var i = 4; i >= -4; i -= 1.5) {
    console.log(i);
}

/* Sigma
code that will add all the values from 1-100 */
var sum = 0;
for (var i = 1; i <= 100; i++){
    sum += i;
} 
console.log(sum);

/* Factorial
code that will multiply all of the values from 1-12 onto some variable*/
var product = 1;
for (var i = 1; i <= 12; i++) {
    product = product * i;
}
console.log(product);