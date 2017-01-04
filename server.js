var express = require('express')
const bodyParser= require('body-parser')
var app = express()
app.use(bodyParser.urlencoded({extended: true}))
var config = require('./config.js')

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html')
});

app.post('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
});

app.listen(3001, function () {
  console.log('Example app listening on port 3001!')
  
})
// $.ajax({
//     url : "/api/wallet/gfgdgdf/", 
//     type : "PUT", 
//     beforeSend: function(request) {
//         request.setRequestHeader("Content-Type", "application/json");
//         request.setRequestHeader("Authorization", "Bearer bgfdsdfsdf");
//     },
//     data : JSON.stringify({"wallet_points":100}),     
//     success : function(json) {                    
//         console.log(json); 
//     },    
//     error : function(xhr,errmsg,err) {                
//         console.log(xhr.status + ": " + xhr.responseText); 
//     }
// });