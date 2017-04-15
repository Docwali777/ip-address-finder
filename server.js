const express = require('express');
const app = express();
const ejs = require('ejs')
const PORT = process.env.PORT || 3000
const ip = require('ip');
var getIP = require('external-ip')();

var publicIpAddress ='';

app.set('view engine', 'ejs')

app.get('/', (req, res)=>{
  const ipAddress = ip.address()
const ip1 = req.ip

const IP = {
  privateIpAddress: `IPv6 ${req.ip} or can be written as ${ipAddress}`,

}
getIP(function (err, ip) {
  if (err) {
      // every service in the list has failed
      throw err;
  }
IP.PublicIpAddress = ip
  res.json(IP);
});

})



app.listen(PORT, ()=>{
  console.log(`PORT: ${PORT}`)
})
