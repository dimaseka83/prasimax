var express=require ('express');
var path= require('path');

var app= express()

// if (process.env.NODE_ENV === 'production') {
app.use('/', express.static(process.env.PROJECT_DIST));
app.get('*', (req, res) => {
res.sendFile(path.join(__dirname ,'dist', 'index.html'))
// })
});
app.listen()