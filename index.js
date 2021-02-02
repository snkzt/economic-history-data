const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'assets')))
  .set('views', path.join(__dirname, 'assets'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('HTML/home.html'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
