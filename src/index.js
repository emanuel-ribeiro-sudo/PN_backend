
const { request, response } = require('express')
const express = require('express')


const routes = require('./routes')

const app = express()
app.use(express.json())

app.use(routes)

app.listen(1322,() => console.log('Server running at http://localhost:1322'));
 