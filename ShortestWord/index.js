function findShort(s) {
    let shortestString = "";
    shortestString = s
        .split(" ")
        .reduce((shortestWord, currentWord) =>
            shortestWord.length > currentWord.length
                ? currentWord
                : shortestWord
        );
    console.log("Shortest String: ", shortestString);
    return shortestString.length;
}

let result;
let expected;

result = findShort("bitcoin take over the world maybe who knows perhaps");
expected = 3;
console.log("Result: ", result, "\tExpected: ", expected);

result = findShort(
    "turns out random test cases are easier than writing out basic ones"
);
expected = 3;
console.log("Result: ", result, "\tExpected: ", expected);

result = findShort("Let's travel abroad shall we");
expected = 2;
console.log("Result: ", result, "\tExpected: ", expected);
