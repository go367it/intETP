const express = require('express')
const app = express()

app.get('/', (req, res)=>{
    res.send('Hello from homepage get route')
})

app.post('/', (req, res)=>{
    res.send('Hello from node js post route')
})

app.listen(3000)