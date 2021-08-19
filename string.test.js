const string = require('./string');

test("stringTestCase", () => {
    expect(string('hello')).toMatch('hello')
})