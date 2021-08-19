const { TestScheduler } = require('jest')
const asyncfetch = require('./asyncfetch')

test('testing async', async() => {
    const data = await asyncfetch()
    expect(data).toBe('yall done')
})