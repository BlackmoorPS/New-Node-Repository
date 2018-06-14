const express = require('express');
const hbs = require('hbs');
const port= process.env.PORT || 3000;
var app =express();
hbs.registerPartials(__dirname + '/views/partials');
hbs.registerHelper('currentYear', ()=>{
  return new Date().getFullYear()
});
app.set('view engine', 'hbs');
app.get('/help', (req,res)=>{
  res.render('help.hbs');
});
app.get('/', (req,res)=>{
  res.render('home.hbs');
});
app.get('/about', (req,res)=>{
  res.render('about.hbs',{
    pagetitle: 'About Page'
  });
});

app.listen(port, ()=>{
  console.log('Connected to the server via ', port);
});
