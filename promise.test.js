const { TestScheduler } = require('jest')
const promise = require('./promise')

test('promise testing', () => {
    return promise().then((data) => {
        expect(data).toBe('howdy')
    })
})