const OpenAi = require('openai'); 
const { Configuration, OpenAIApi }=OpenAi

const express = require("express");
const app = express();
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
const bodyparser = require('body-parser')


var PORT = process.env.port || 3000
// Body-parser middleware

app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())

app.listen(PORT, function(error){
	if (error) throw error
	console.log("Server created Successfully on PORT", PORT)
})
