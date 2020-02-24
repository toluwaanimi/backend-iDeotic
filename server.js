const password = "o96aBKVPPLbUCTAn";
const fs = require('fs');
const U = "mongodb+srv://yts:yts@nimi-tswfy.mongodb.net/test?retryWrites=true&w=majority";
const URL = "mongodb://admin:"+password+"@SG-nimi-30987.servers.mongodirector.com:51448,SG-nimi-30988.servers.mongodirector.com:51448,SG-nimi-30989.servers.mongodirector.com:51448/admin?replicaSet=RS-nimi-0&ssl=true";
const mongoose = require('mongoose');
var certFileBuf = fs.readFileSync('./ssl.txt');

// var options = {
//     replset: {sslValidate: false}
// }
var options = {
    server: { sslCA: certFileBuf }
};
const http = require('http');
const app = require('./index');
mongoose.connect(URL ,options).then(()=> console.log('Connection Successful')).catch( err => console.log(err));
mongoose.Promise = global.Promise;
const PORT = process.env.PORT || 3000;
const server = http.createServer(app);
server.listen(PORT, ()=> console.log('Running'));
