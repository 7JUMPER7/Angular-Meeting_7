const express = require('express');
const fs = require('fs');
const app = express();

const jsonParser = express.json();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Accept, Content-Type');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    next();
});


app.get('/goods', (req, res) => {
    fs.readFile('./Data/goods.json', 'utf8', (err, data) => {
        if (err) {
            res.sendStatus(404);
        } else {
            res.setHeader('Content-Type', 'application/json');
            res.json(JSON.parse(data));
        }
    });

});

app.post('/register', jsonParser, (req, res) => {
    if (!req.body) {
        res.send({code: 404});
    } else {
        user = req.body;
        fs.readFile('./Data/users.json', 'utf8', (err, data) => {
            if (err) {
                res.send({code: 502});
            } else {
                users = JSON.parse(data);
                if (users.filter(u => u.username === user.username).length > 0) {
                    res.send({code: 403});
                } else {
                    users.push(user);
                    fs.writeFile('./Data/users.json', JSON.stringify(users), (err, data) => {
                        if (err) {
                            res.send({code: 502});
                        } else {
                            res.send({code: 200});
                        }
                    });
                }
            } 
        });
    }
});


app.listen(3000, () => {
    console.log('Server started');
});