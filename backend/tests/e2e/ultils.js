
const randomString = () => {
    return Math.random().toString(16).slice(2)
}

const userData = () => {
    return {
        "firstname": randomString(),
        "surname": randomString(),
        "email": `${randomString()}@mail.com`,
        "password": randomString()
    }
}

module.exports = {
    userData, 
    randomString
}