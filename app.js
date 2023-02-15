const express = require('express')
const app = express()
const path = require('path');
const {connection} = require('./database')

const port = 3000

const homePage = path.join(__dirname, '/client','/index.html')

app.use(express.static('public'))


app.get('/', (req, res) => {
    connection.connect();   
    res.sendFile(homePage)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })