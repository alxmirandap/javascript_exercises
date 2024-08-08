// This file mixes two distinct problems. The first one is how to get the jth bit
// of the kth element in an array. 

// This is problem 17.4, from a chapter of further "Hard problems", from the book 
// "Cracking the Coding Interview" by Gayle Laakmann McDowell (6th Edition)

// This problem is similar to an Easy problem in Leetcode called "Missing Number" 
// Reference: https://leetcode.com/problems/missing-number/

// The reason for this problem to be classed as Hard in the book is because the author
// does not consider the easy arithmetic solution performant enough, and so 
// encourages the reader to compute the missing value by bit manipulation.

// In this file I give a full solution for the bit manipulation approach, 
// and an arithmetic one for use in Leetcode.


function accessArrayBit(array, valueIndex, bitIndex) {
    return getBit(array[valueIndex], bitIndex)
}

function getBit(number, bitIndex) {
    let mask = (1 << bitIndex)
    return (number & mask) >> bitIndex
}

function expectedNumberOf0Bits(n) {
    return Math.trunc(n / 2) + 1
}

function expectedNumberOf1Bits(n) {
    return n - expectedNumberOf0Bits(n) + 1
}

/* 
up to n=6

000
001
010
011
101
110

Count1: 3
Expected1: 3
Missing bit: 0

00
01
11


up to n=3
Count1: 2
Expected1: 2
Missing bit: 0

0
up to n=1
Count1: 0
Expected1: 1
Missing bit: 1

Missing number: 100

Verification: correct

*/

function missingNumberArithmeticSolution(nums) {
    let n = nums.length + 1; // there is one number missing, full array would have length + 1
    let expectedSum = (n-1)/2 * n;
    let sum = nums.reduce((a, b) => a + b, 0);
    return expectedSum - sum;
}

function findMissing(array) {
    let result = 0
    let bitShift = 0
    let lastRound = false

    while(true) {
        if (missingNumberEndsIn1(array)) {
            [result, bitShift] = add1ToMissingBits(result, bitShift)
            array = removeEvenValues(array)     
        } else {
            [result, bitShift] = add0ToMissingBits(result, bitShift)
            array = removeOddValues(array)           
        }
        array = shiftValuesRight(array)
        if (lastRound) break
        if (array.length === 1) lastRound = true
    }

    return result
}

function missingNumberEndsIn1(array) {
    let maxNumber = array.length
    return count1Bits(array) < expectedNumberOf1Bits(maxNumber)
}

function count1Bits(array) {
    let count1s = 0
    for (let i = 0; i < array.length; i++) {
        count1s += accessArrayBit(array, i, 0)
    }
    return count1s
}

function add1ToMissingBits(result, bitShift) {
    return [result + (1 << bitShift), bitShift + 1]
}

function add0ToMissingBits(result, bitShift) {
    return [result, bitShift + 1]
}

function removeEvenValues(array) {
    return array.filter(value => value % 2 !== 0)
}

function removeOddValues(array) {
    return array.filter(value => value % 2 === 0)
}

function shiftValuesRight(array) {
    return array.map(value => value >> 1)
}

module.exports = {
    findMissing,
    getBit,
    accessArrayBit,
    expectedNumberOf0Bits,
    expectedNumberOf1Bits
}