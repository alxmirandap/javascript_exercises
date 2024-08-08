const mymodule = require('./add_without_arith');
const MAX_NUMBER = 999

function randomNumber(min, max) {
    return min + Math.trunc(Math.random() * (max+1 - min))
    
}

describe('Addition behaviour', () => {
    it('adding 0 to 0 returns 0', () => {
        expect(mymodule.add(0, 0)).toBe(0)
    })

    it('adding any positive number to 0 returns that number', () => {
        let n = randomNumber(1, MAX_NUMBER)
        expect(mymodule.add(n, 0)).toBe(n)
    })

    it('adding 0 to any positive number returns that number', () => {
        let n = randomNumber(1, MAX_NUMBER)
        expect(mymodule.add(0, n)).toBe(n)
    })

    it('adding any negative number to 0 returns that number', () => {
        let n = randomNumber(-MAX_NUMBER, -1)
        expect(mymodule.add(n, 0)).toBe(n)
    })

    it('adding 0 to any negative number returns that number', () => {
        let n = randomNumber(-MAX_NUMBER, -1)
        expect(mymodule.add(0, n)).toBe(n)
    })

    it('adding two positive numbers of a single digit returns the correct sum', () => {
        let a = randomNumber(1, 9)
        let b = randomNumber(1, 9)
        expect(mymodule.add(a, b)).toBe(a + b)
    })

    it('adding two positive numbers of three digits returns the correct sum', () => {
        let a = randomNumber(101, 999)
        let b = randomNumber(101, 999)
        expect(mymodule.add(a, b)).toBe(a + b)
    })

    it('adding two negative numbers of a single digit returns the correct sum', () => {
        let a = randomNumber(-9, -1)
        let b = randomNumber(-9, -1)
        expect(mymodule.add(a, b)).toBe(a + b)
    })

    it('adding two negative numbers of three digits returns the correct sum', () => {
        let a = randomNumber(-999, -101)
        let b = randomNumber(-999, -101)
        expect(mymodule.add(a, b)).toBe(a + b)
    })

    it('adding a positive number of 3 digits to its symmetric returns 0', () => {
        let a = randomNumber(1, MAX_NUMBER)
        expect(mymodule.add(a, -a)).toBe(0)

    })


})