const express = require("express");

let resObj = [
    {
        'number': '12345',
        'extension': '123',
        'type': 'Operator',
        'city': 'LA',
        'state': 'CA',
        'desc': '',
        'dateCreated': '29/07/2021',
        'active': 'true'
    }
]




const PORT = process.env.PORT || 3001;

const app = express();

const bodyParser = require("body-parser");

var cors = require('cors');

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.use(cors());

app.get("/api", (req, res) => {

    res.json(resObj);
});

// app.post("/save", function (req, res) {
//     var result = req;
//     console.log('req', req);

//     res.send("Addition - " + result);
// });
app.post('/save', function (req, res) {
    // First read existing users.
    console.log('req', req.body);
    resObj.push(req.body.data);
    res.json(resObj);
})

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});