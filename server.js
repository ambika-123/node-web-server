const express=require('express');

var app=express();

app.set('view engine', 'hbs');
app.use(express.static(__dirname+'/public'));
app.get('/',(req,res)=>{
  res.render('home.hbs',{
    welcomeMessage:"welcome to website",
    date:new Date().getFullYear()
  })

})

app.listen(3000,()=>{
  console.log('app is running on port 3000');
})
