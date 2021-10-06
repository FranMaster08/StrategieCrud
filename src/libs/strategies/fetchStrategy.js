const fetch = require('node-fetch')
const returnOptions = (option,method) => ({ 
    method: method,
    headers: option.headers ? option.headers : null,
    body: option.body ? option.body :null
 })

const fetchStrategy = {
    get:async (options)=>{
        console.log('pollo');
        const requestOptions = returnOptions(options,'get')
        return await fetch(options.url,requestOptions)
    },
    post:async (options)=>{
        const requestOptions = returnOptions(options,'post')
        return await fetch(options.url,requestOptions)
    },
    delete:async (options)=>{
        const requestOptions = returnOptions(options,'delete')
        return await fetch(options.url,requestOptions)
    },
    update:async (options)=>{
        const requestOptions = returnOptions(options,'put')
        return await fetch(options.url,requestOptions)
    },
 
}

module.exports = fetchStrategy

