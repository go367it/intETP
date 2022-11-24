const express = require('express')
const app = express()


const middleware = (req, res, next) =>{
    console.log('middleware')
    // res.send('middle')
    next()
}


app.get('/', middleware, (req, res)=>{
    console.log('home route')
    res.send(`home`)
})

app.listen(3000)