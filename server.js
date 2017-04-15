const express = require('express');
const app = express();
const ejs = require('ejs')
const PORT = process.env.PORT || 3000
const ip = require('ip');
var extIP = require('external-ip');
var get_ip = require('ipware')().get_ip;



var getIP = extIP({
    replace: true,
    services: ['http://ifconfig.co/x-real-ip', 'http://ifconfig.io/ip'],
    timeout: 600,
    getIP: 'parallel'
});

var publicIpAddress ='';

app.set('view engine', 'ejs')

app.get('/', function(req, res, next) {

let IP = {
  PublicIpAddress: get_ip(req).clientIp,
  PrivateIpAddress: ip.address(),
  Language: req.headers['accept-language'].split(',')[0],
  UserComputerInformation: req.headers['user-agent'].split('(')[1].split(')')[0]
}
    console.log(req.headers)
    res.json(IP);
    // { clientIp: '127.0.0.1', clientIpRoutable: false }
    next();
});

// app.get('/', (req, res)=>{
//   const ipAddress = ip.address()
// const ip1 = req.ip
//
// const IP = {
//   privateIpAddress: `${ipAddress}`,
//
// }
// // res.render('index', {
// //   ipAddress,
// //   ip1
// // })
// getIP(function (err, ip) {
//   if (err) {
//       // every service in the list has failed
//       throw err;
//   }
// IP.PublicIpAddress = ip
//   res.json(IP);
// });
//
// })



app.listen(PORT, ()=>{
  console.log(`PORT: ${PORT}`)
})
