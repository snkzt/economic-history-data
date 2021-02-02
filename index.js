const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'assets')))
  .set('assets', path.join(__dirname, 'assets'))
  .set('view engine', 'html')
  .get('/', (req, res) => res.render('HTML/home'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
