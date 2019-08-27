const express= require("express");
const bodyparser= require("body-parser");
const app=express();
app.use(express.static('public'));
var port=process.env.PORT||3000;
app.get("/",function(req,res)
{
	res.sendFile(__dirname+"/index.html");
});


app.listen(port,function()
{
	console.log("server started at port 3000");
});
