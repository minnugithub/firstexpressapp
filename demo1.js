var express=require('express');
var app=express();
app.get('/',function(req,res){
    res.send('welcome');
})
var server=app.listen(8000,function(){
    var host=server.address().host
    var port=server.address().port
    console.log("example app listening at http://%s:%s",host,port)
})