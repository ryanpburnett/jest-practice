function asyncfetch() {
    return new Promise((resolve, reject) => {
        resolve('yall done')
        reject('aint lookin right')
    })
}

module.exports = asyncfetch