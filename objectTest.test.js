const { TestScheduler } = require('jest')
const object = require('./object')

test('objectTesting', () => {
    expect(object()).toEqual({name: 'Ryan'})
})