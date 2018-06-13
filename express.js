const express = require('express');
const hbs = require('hbs');
var app =express();
hbs.registerPartials
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

app.listen(3000);
