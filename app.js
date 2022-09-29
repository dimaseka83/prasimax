var express=require ('express');
var path= require('path');
var cors = require('cors');

var compression = require('compression');
var app= express()

// app.use(compression());
// app.use(cors());
// if (process.env.NODE_ENV === 'production') {
app.use('/home', express.static('/home/eshya/Documents/prasimax/WEB/Company-Prasimax-FE/dist'));
app.get('*', (req, res) => {
res.sendFile(path.join(__dirname ,'dist', 'index.html'))
// })
});

module.exports = app