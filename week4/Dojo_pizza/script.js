function pizzaOven(crustType, sauceType, cheeses,toppings) {
    var pizza ={};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses= cheeses;
    pizza.toppings= toppings;
    return pizza;
}

//  Value of these two varibles is set to a function (defined above) which is containing arguments)
var pizza1 = pizzaOven("deep dish", "traditional",["mozzarella"],
["pepperoni", "sausage"]);

var pizza2 = pizzaOven("hand tosses", "marinara", ["mozzarella","feta"],
["mashrooms", "olives", "onions"]);


//  variables listed below will be used to create a random pizza

var crustTypes = ["deep dish", "hand tossed", "cauliflower","gluten free"];

var sauceTypes = ["traditional","marinara","bbq"];

var cheeses = ["mozzarella", "cheddar", "feta", "blue cheese", "goat cheese", "parmesan"];

var toppings = ["tomatoes", "paneer", "corn", "olives", "onions", "mushrooms"];

// given an array this function will choose the random index number from an array
function randomPick(arr) {
    var i = Math.floor(arr.length * Math.random());
    return arr[i];
}

//This function is used to create random pizza
function randomPizza() {
    var pizza = {};
    pizza.crustType = randomPick(crustTypes);
    pizza.sauceType = randomPick(sauceTypes);
    pizza.cheeses = randomPick(cheeses);
    pizza.toppings = randomPick(toppings);
    return pizza;
}

console.log(pizza1);        // returns pizza1 utilizing arguments associated with the function
console.log(pizza2);        // returns the pizza2 utilizing arguments associated with the function
console.log(randomPizza());  //returns a random/new pizza everytime!!!!

