const express = require('express')
const { dirname } = require('path')
const path = require('path')
const PORT = process.env.PORT || 5000
const app = express()

  app.use(express.static(path.join(__dirname, 'assets')))
  app.get('/', (req, res) => {
    console.log(req)
    res.sendFile(path.join(__dirname,'assets/HTML/home.html'))  
  })
  app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
