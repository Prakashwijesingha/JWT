const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();

app.get('/', (req, res) => {

    res.json( {msg:"Hello World!"} )
})

app.listen(4000, () => {
    console.log('app is listening for port 4000')
})