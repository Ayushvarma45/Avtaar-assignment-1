const express = require('express');
const bodyParser = require('body-parser');
const crypto = require('crypto');

const app = express();  
app.use(express.static("public"));
         

app.use(express.urlencoded({
  extended: true
}));

app.get("/", (req, res) => {
     res.sendFile(__dirname+"/index.html");
})

app.post("/", (req, res) => {
    const _id = crypto.randomBytes(16).toString('hex');
    const name = req.body.name; 
    const result = {
        id : _id,
        name : name
    }
       res.send(`
       <center>
       <div id="main"> 
       <h1>User Details</h1>
        <p>Name:     ${result.name}</p>
        <p>ID:       ${result.id}</p>
       </div>
       </center>`
       );
})

app.listen(4000, () => {
    console.log('Server running on  localhost :4000');
})
