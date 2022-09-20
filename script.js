var pizza1 = {
    crustType: "deep dish",
    sauceType: "traditional",
    cheeses: "[mozzarella]",
    toppings: "[pepperoni, sausage]",
};

console.log(pizza1);


function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza1 = {};
    pizza1.crustType = crustType;
    pizza1.sauceType = sauceType;
    pizza1.cheeses = cheeses;
    pizza1.toppings = toppings;
    return pizza1;
}

var pizza2 = pizzaOven("hand tossed", "marinara", "[mozzarella, feta]", "[mushrooms, olives, onions]")

console.log(pizza2);

var pizza3 = pizzaOven("cheese filled", "pesto", "parmesan", "[green peppers, broccoli]")

console.log(pizza3);

var pizza4 = pizzaOven("burnt on the edges", "tomato sauce", "muenster", "[mushrooms, garlic, hot red pepper]")

console.log(pizza4);




