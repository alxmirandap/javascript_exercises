const mymodule = require('./missing_number');
const utils = require('./utils');

let missing_number
let a

describe('getBit works properly', () => {
    it('the 0th bit of 13 is 1', () => {
        expect(mymodule.getBit(13, 0)).toBe(1)
    })

    it('the 1st bit of 13 is 0', () => {
        expect(mymodule.getBit(13, 1)).toBe(0)
    })

    it('the 2nd bit of 13 is 1', () => {
        expect(mymodule.getBit(13, 2)).toBe(1)
    })

    it('the 3rd bit of 13 is 1', () => {
        expect(mymodule.getBit(13, 3)).toBe(1)
    })

    it('the 4th bit of 13 is 0', () => {
        expect(mymodule.getBit(13, 4)).toBe(0)
    })
})

describe('accessArrayBit works properly', () => {
    let list = [10, 13, 17, 24]

    it('the 0th bit of the 3rd element is 0', () => {
        expect(mymodule.accessArrayBit(list, 3, 0)).toBe(0)
    })

    it('the 1st bit of the 3rd element is 0', () => {
        expect(mymodule.accessArrayBit(list, 3, 1)).toBe(0)
    })

    it('the 2nd bit of the 3rd element is 0', () => {
        expect(mymodule.accessArrayBit(list, 3, 2)).toBe(0)
    })

    it('the 3rd bit of the 3rd element is 1', () => {
        expect(mymodule.accessArrayBit(list, 3, 3)).toBe(1)
    })

    it('the 4th bit of the 3rd element is 1', () => {
        expect(mymodule.accessArrayBit(list, 3, 4)).toBe(1)
    })

    it('the 5th bit of the 3rd element is 0', () => {
        expect(mymodule.accessArrayBit(list, 3, 5)).toBe(0)
    })
})


describe('the expected number of LSBs', () => {

    describe('equal to 0', () => {
        it('for n = 0 is 1', () => {
            expect(mymodule.expectedNumberOf0Bits(0)).toBe(1)
        })

        it('for n = 1 is 1', () => {
            expect(mymodule.expectedNumberOf0Bits(1)).toBe(1)
        })

        it('for n = 2 is 2', () => {
            expect(mymodule.expectedNumberOf0Bits(2)).toBe(2)
        })

        it('for n = 3 is 2', () => {
            expect(mymodule.expectedNumberOf0Bits(3)).toBe(2)
        })

        it('for n = 4 is 3', () => {
            expect(mymodule.expectedNumberOf0Bits(4)).toBe(3)
        })

        it('for n = 5 is 3', () => {
            expect(mymodule.expectedNumberOf0Bits(5)).toBe(3)
        })

        it('for n = 6 is 4', () => {
            expect(mymodule.expectedNumberOf0Bits(6)).toBe(4)
        })

        it('for n = 7 is 4', () => {
            expect(mymodule.expectedNumberOf0Bits(7)).toBe(4)
        })

    })

    describe('equal to 1', () => {
        it('for n = 0 is 0', () => {
            expect(mymodule.expectedNumberOf1Bits(0)).toBe(0)
        })

        it('for n = 1 is 1', () => {
            expect(mymodule.expectedNumberOf1Bits(1)).toBe(1)
        })

        it('for n = 2 is 1', () => {
            expect(mymodule.expectedNumberOf1Bits(2)).toBe(1)
        })

        it('for n = 3 is 2', () => {
            expect(mymodule.expectedNumberOf1Bits(3)).toBe(2)
        })

        it('for n = 4 is 2', () => {
            expect(mymodule.expectedNumberOf1Bits(4)).toBe(2)
        })

        it('for n = 5 is 3', () => {
            expect(mymodule.expectedNumberOf1Bits(5)).toBe(3)
        })

        it('for n = 6 is 3', () => {
            expect(mymodule.expectedNumberOf1Bits(6)).toBe(3)
        })

        it('for n = 7 is 4', () => {
            expect(mymodule.expectedNumberOf1Bits(7)).toBe(4)
        })

    })
})

describe('for n = 15', () => {
    beforeAll(() => {
        missing_number = utils.randomNumber(0, 15)
        // console.log(`missing number: ${missing_number}`)
        a = new Array(16)
            .fill(0)
            .map((value, index) => index)
            .filter(value => value !== missing_number)

        console.log('array', a)                
    })

    it('can find the missing number', () => {
        expect(mymodule.findMissing(a)).toBe(missing_number)
    })
})

describe ('for n = 30', () => {
    beforeAll(() => {
        missing_number = utils.randomNumber(0, 30)
        // console.log(`missing number: ${missing_number}`)
        a = new Array(31)
            .fill(0)
            .map((value, index) => index)
            .filter(value => value !== missing_number)

        console.log('array', a)                
    })

    it('can find the missing number', () => {
        expect(mymodule.findMissing(a)).toBe(missing_number)
    })

})

describe ('for n = 47', () => {
    beforeAll(() => {
        missing_number = utils.randomNumber(0, 47)
        // console.log(`missing number: ${missing_number}`)
        a = new Array(48)
            .fill(0)
            .map((value, index) => index)
            .filter(value => value !== missing_number)

        console.log('array', a)                
    })

    it('can find the missing number', () => {
        expect(mymodule.findMissing(a)).toBe(missing_number)
    })

})