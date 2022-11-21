function doubleEveryOther(a) {
    const b = [];
    let result = 0;
    a.forEach((element, i) => {
        console.log("i: ", i, "\telement: ", element, "\t i % 2: ", i % 2);
        result = i % 2 === 0 ? element : 2 * element;
        b.push(result);
    });

    return b;
}
/* -----------------------------
            Testing 
--------------------------------*/

let testArray = [1, 2, 3, 4];
let result;

result = doubleEveryOther(testArray);
console.log("--------------------------------");
console.log("\tTest 1");
console.log("Result: ", result, "\tExpected: ", [1, 4, 3, 8]);

testArray = [1, 19, 6, 2, 12, -3];
result = doubleEveryOther(testArray);
console.log("--------------------------------");
console.log("\tTest 2");
console.log("testArray: ", testArray);
console.log("Result: ", result, "\tExpected: ", [1, 38, 6, 4, 12, -6]);
