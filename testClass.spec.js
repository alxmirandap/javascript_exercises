const testModule = require('./TestClass');

it('Simple test', () => {
    let c = new testModule.TestClass('hello')
    expect(c.name).toBe('hello')
})

