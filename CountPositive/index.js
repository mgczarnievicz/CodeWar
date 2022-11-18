function countPositivesSumNegatives(input) {
    // your code here
    let countPos = 0;
    let countLess = 0;

    if (input === null || input.length === 0) {
        return [];
    } else {
        input.forEach((each) => {
            // if (each > 0) {
            //     //Positive
            //     countPos++;
            // } else {
            //     // Negative
            //     countLess += each;
            // }

            each > 0 ? countPos++ : (countLess += each);
        });
        return [countPos, countLess];
    }
}

/*
Testing
*/
let testData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
let actual = countPositivesSumNegatives(testData);
let expected = [10, -65];

console.log("actual: ", actual);

let testData1 = [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14];
let actual1 = countPositivesSumNegatives(testData1);
let expected1 = [8, -50];
console.log("actual1: ", actual1);
