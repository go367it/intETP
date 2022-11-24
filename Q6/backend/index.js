const express = require('express')
const users = require('./users.json')// normal importing
const fs = require('fs')
const app = express()

app.get('/', (req, res)=>{

    fs.readFile("users.json", (err, data)=>{
        if(err){
            throw err
        }
        let bufferData = data
    let stData = bufferData.toString()
    let data1 = JSON.parse(stData)
        res.send(data1)
        console.log(data1)
    })

    // res.send(users)

})

app.listen(3000)