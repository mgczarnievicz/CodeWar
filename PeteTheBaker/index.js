function cakes(recipe, available) {
    let maxAmounts = [];
    let result = 0;
    //floor()
    for (ingredient in recipe) {
        if (!available[ingredient]) {
            // The ingredient is not available, so we can not do the recipe
            return 0;
        }
        result = available[ingredient] / recipe[ingredient];
        maxAmounts.push(Math.floor(result));
    }
    return Math.min(...maxAmounts);
}

/* -------------------------------
            Testing 
----------------------------------*/
let result;
result = cakes(
    { flour: 500, sugar: 200, eggs: 1 },
    { flour: 1200, sugar: 1200, eggs: 5, milk: 200 }
);
console.log("Result: ", result, "\tExpected: 2");
// must return 0
result = cakes(
    { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 },
    { sugar: 500, flour: 2000, milk: 2000 }
);
result = console.log("Result: ", result, "\tExpected: 0");
