const {httpManger,strategies} = require('../libs')
const requestHttp = new httpManger()
requestHttp.setStrategy(strategies.fetchStrategy)


const userModel = {

    getUser:async (header) => {
        let users=  await requestHttp.get({url:'https://jsonplaceholder.typicode.com/users'})
        return await users.json()
    },

    createUser:async(header,user) => {
        let result = await requestHttp.post({
            url:'https://jsonplaceholder.typicode.com/users',
            body:user
        })
        return await result.json()
    },

    updateUser:(header,id,user) => {
        return {}
    },

    deleteUser:(header,id) => {
        return {}
    }

}


module.exports = userModel