const print = require('./index')

test('should equal string "Hello World"', () => {
    expect(print('Hello World')).toEqual('Hello World')
})

test('shloud fail', () => {
    expect(print('Hello World')).toEqual('Failed')
})