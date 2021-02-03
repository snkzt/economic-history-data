const express = require('express')
const { dirname } = require('path')
const path = require('path')
const PORT = process.env.PORT || 5000
const app = express()

app.use(express.static(path.join(__dirname, 'assets')))
app.use(express.static('CSS'))
app.use(express.static('HTML'))
app.use(express.static('image'))
app.use(express.static('js'))
app.get('/', (req, res) => res.sendFile(path.join(__dirname,'assets/HTML/home.html')))
app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
