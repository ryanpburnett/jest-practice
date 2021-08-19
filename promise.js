function promise() {
    return new Promise((resolve, reject) => {
        resolve('howdy');
        reject('dont look good pardner');
    })
}

module.exports = promise