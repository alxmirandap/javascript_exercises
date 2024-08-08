const trapping_water = require('./trapping_water');

function Testcase(input, answer) {
    this.input = input
    this.answer = answer
}

describe('testing trapping water', () => {
    let testcases = []

    testcases.push(new Testcase([0,1,0,2,1,0,1,3,2,1,2,1], 6))
    testcases.push(new Testcase([4,2,0,3,2,5], 9))
    testcases.push(new Testcase([0,1,0,2,1,0,1,4,2,1,3,2], 8))
    testcases.push(new Testcase([0,1,0,2,1,0,1,4,2,1,0,5], 14))

    for (const testcase of testcases) {
        it(`calling trapping water with array ${testcase.input} should return ${testcase.answer}`, () => {
            let answer = trapping_water.calculate(testcase.input)
            expect(answer).toBe(testcase.answer)
        })
    }

})
