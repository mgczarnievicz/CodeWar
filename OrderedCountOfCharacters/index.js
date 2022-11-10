/* -------------------------------------
            Method 1
---------------------------------------- */

const orderedCount = function (text) {
    console.log("text: ", text);
    const letters = [];
    const solution = [];
    for (let i = 0; i < text.length; i++) {
        if (!letters.includes(text[i])) {
            count = search(text[i], i, text);
            console.log("Letter: ", text[i], "\tcount: ", count);
            letters.push(text[i]);
            solution.push([text[i], count]);
        }
    }
    return solution;
};

function search(letter, index, text) {
    let count = 0;
    for (let i = index; i < text.length; i++) {
        if (text[i] === letter) {
            count++;
        }
    }
    return count;
}

/* -------------------------------------
            Method 2
---------------------------------------- */

const orderedCount1 = function (text) {
    console.log("text: ", text);
    const counts = {};
    const solution = [];
    for (let i = 0; i < text.length; i++) {
        if (counts.hasOwnProperty(text[i])) {
            counts[text[i]] += 1;
        } else {
            counts[text[i]] = 1;
        }
    }
    console.log("counts obj: ", counts);
    for (let key in counts) {
        console.log("Letter: ", key, "\tcount: ", counts[key]);

        solution.push([key, counts[key]]);
    }
    return solution;
};

const examples = [
    [
        "abracadabra",
        [
            ["a", 5],
            ["b", 2],
            ["r", 2],
            ["c", 1],
            ["d", 1],
        ],
    ],
    [
        "Code Wars",
        [
            ["C", 1],
            ["o", 1],
            ["d", 1],
            ["e", 1],
            [" ", 1],
            ["W", 1],
            ["a", 1],
            ["r", 1],
            ["s", 1],
        ],
    ],
    [
        "233312",
        [
            ["2", 2],
            ["3", 3],
            ["1", 1],
        ],
    ],
];

/* ------------------------------
        Test: Method 1
--------------------------------*/

for (let i = 0; i < examples.length; i++) {
    orderedCount(examples[i][0]);
}

/* ------------------------------
        Test: Method 2
--------------------------------*/
for (let i = 0; i < examples.length; i++) {
    orderedCount1(examples[i][0]);
}
