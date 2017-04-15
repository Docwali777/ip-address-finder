const express = require('express');
const app = express();
const ejs = require('ejs')
const PORT = process.env.PORT || 3000
const ip = require('ip');
var extIP = require('external-ip');
var get_ip = require('ipware')().get_ip;

 app.use(function(req, res, next) {
    //  var ip_info = get_ip(req);
     var ip_info = get_ip(req, right_most_proxy='True')
     res.json(ip_info);
     // { clientIp: '127.0.0.1', clientIpRoutable: false }
     next();
 });

var getIP = extIP({
    replace: true,
    services: ['http://ifconfig.co/x-real-ip', 'http://ifconfig.io/ip'],
    timeout: 600,
    getIP: 'parallel'
});

var publicIpAddress ='';

app.set('view engine', 'ejs')

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
