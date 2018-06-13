const express = require('express');
const hbs = require('hbs');
const port= process.env.PORT || 3000;
var app =express();
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/templates'));
app.get('/', (req,res)=>{
  res.send({
    Name: 'Kratos',
    Job: 'God of war',
    occupation: 'raising his kid :P'
  });
});
app.get('/about', (req,res)=>{
  res.render('about.hbs',{
    pagetitle: 'About Page'
  });
});

app.listen(port, ()=>{
  console.log('Connected to the server via ', port);
});
