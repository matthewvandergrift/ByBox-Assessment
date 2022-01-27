var express = require("express");
var router = express.Router();
var axios = require("axios")

router.get("/", function(req, res, next) {
    let users = [];
    try {
        
        await axios.default.get('https://jsonplaceholder.typicode.com/users').then(result => {  
            console.log(result.data);
            users = result.data.map(res => {
                users.push(res.username);
            })
        })
        
    } catch (e) {
        // def do something
    }
    res.send(users);
    console.log('a')
    //res.send("API is working properly");
});

module.exports = router;
