// Q1: Write a JavaScript program to capitalize the first letter of each word of a given string.

function capitalizeFirstLetter(str){
    let words = str.split('');
    for (let i = 0; i < words.length; i++) {
        if (i === 0 || words[i - 1] === ' ') {
            words[i] = words[i].toUpperCase();
        }
    }
    return words.join('');
}

console.log(capitalizeFirstLetter("the quick brown fox"));

//Q2: Write a JavaScript program to find the largest of three given integers.

function findLargestOfThree(a, b, c) {
    return Math.max(a, b, c);
}

console.log(findLargestOfThree(1,0,1));
console.log(findLargestOfThree(0,-10,-20));
console.log(findLargestOfThree(1000,510,440));


//Q3: Write a JavaScript program to move last three character to the start of a given string. The string length must be greater or equal to three

function moveLastThreeToStart(str) {
    if (str.length < 3) {
        return str;
    }

    let lastThree = str.slice(-3);
    let restOfString = str.slice(0, -3);
    return lastThree + restOfString;
}

console.log(moveLastThreeToStart("Python"));
console.log(moveLastThreeToStart("JavaScript"));
console.log(moveLastThreeToStart("Hi"));



//Q5: Write a JavaScript program to find the maximum possible sum of some of its k consecutive numbers 
// (numbers that follow each other in order.) of a given array of positive integers.

function maxSum(array, k) {
    let sumArr = 0;
    for (let i = 0; i < array.length - k + 1; i++) {
        let sum = 0;
        for (let j = i; j < i + k; j++) {
            sum += array[j];
        }
        sumArr = Math.max(sumArr, sum);
    }
    return sumArr;
}

console.log(maxSum([1, 2, 3, 14, 5], 2))
console.log(maxSum([2, 3, 5, 1, 6], 3))
console.log(maxSum([9, 3, 5, 1, 7], 2))

