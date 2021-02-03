const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const app = express()

app.use(express.static(path.join(__dirname, 'assets')))
app.get('/', (req, res) => res.sendFile(path.join(__dirname,'assets/html/home.html')))
app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
