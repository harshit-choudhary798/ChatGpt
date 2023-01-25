const OpenAi = require('openai'); 
const { Configuration, OpenAIApi }=OpenAi

const express = require("express");
const app = express();
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
const bodyparser = require('body-parser')

require("dotenv").config();



var PORT = process.env.port || 3000
// Body-parser middleware


app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())



const configuration = new Configuration({
    organization: process.env.ORG,
    apiKey: process.env.API_KEY,
});
const openai = new OpenAIApi(configuration);


app.get("/", function(req, res){
	res.render("index")
});

app.post('/saveData',async (req, res) => {
	const response = await openai.createCompletion({
		model: "text-davinci-003",
		prompt: 

		`${req.body.abcd}?`,
		max_tokens: 1000,
		temperature: 0,
	  });
	console.log("response: ",response)
	if(response.data.choices[0].text){
		res.render("text",{
			items:response.data.choices[0].text
		});

	}
	
	console.log("Using Body-parser: ", req.body.abcd)
})

app.listen(PORT, function(error){
	if (error) throw error
	console.log("Server created Successfully on PORT", PORT)
})
