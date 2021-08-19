const fetchData = require('./fetchData');

test('testing callback function', done => {

    function cb(data){
        try {
            expect(data).toBe('Hello')
            done()
        }catch(err){
            done(err)
        }
    }
    fetchData(cb);
})
