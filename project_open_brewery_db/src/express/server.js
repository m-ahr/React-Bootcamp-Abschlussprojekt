// Server zu Testzwecken
const express = require('express');
const app = express();

const port = 3000;

app.get('/', (req, res) => {
    res.render('test');
} )

app.use(express.static('public'));

app.listen(port, () => {
    console.log('http://localhost:3000/');
})