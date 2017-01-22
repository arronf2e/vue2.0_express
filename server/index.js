const fs = require('fs')
const path = require('path')
const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const userApi = require('./api/userApi')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/api/user', userApi)

app.listen(3000)
console.log('Success listen at port: 3000......')