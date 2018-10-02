const express=require('express');
const hbs=require('hbs');
var app = express();
app.set('view engine',hbs);
hbs.registerPartials(__dirname +'/views/partials');
app.use(express.static(__dirname + '/public'));
app.get('/',(req,res) => {
   // res.send("HELLO WORLD!")
   res.send({
       name:'Ajay',
       likes: [
           'reading','writing'
       ]
   });
});
app.get('/home',(req,res) => {
    res.render('home.hbs',{
        pagetitle:'Home Page',
        currentYear:new Date().getFullYear()
    });
});

app.get('/about',(req,res) => {
    res.render('about.hbs',{
        pagetitle:'About Page',
        currentYear:new Date().getFullYear()
    });
});
app.listen(3000);