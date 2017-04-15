const express = require('express');
const app = express();
const ejs = require('ejs')
const PORT = process.env.PORT || 3000
const ip = require('ip');
var extIP = require('external-ip');
var get_ip = require('ipware')().get_ip;





var publicIpAddress ='';

app.set('view engine', 'ejs')

app.get('/', function(req, res, next) {

let IP = {
  PublicIpAddress: get_ip(req).clientIp,
  PrivateIpAddress: ip.address(),
  Language: req.headers['accept-language'].split(',')[0],
  UserComputerInformation: req.headers['user-agent'].split('(')[1].split(')')[0]
}
    res.render('index', {
      IP: IP
    });
    // { clientIp: '127.0.0.1', clientIpRoutable: false }
    next();
});



app.listen(PORT, ()=>{
  console.log(`PORT: ${PORT}`)
})
