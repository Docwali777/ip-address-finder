const express = require('express');
const app = express();
const ejs = require('ejs')
const PORT = process.env.PORT || 3000
const ip = require('ip')

app.set('view engine', 'ejs')

app.get('/', (req, res)=>{
  const ipAddress = ip.address()
const ip1 = req.ip
  res.render('index', {
ipAddress,
  ip1
  })
})



app.listen(PORT, ()=>{
  console.log(`PORT: ${PORT}`)
})
