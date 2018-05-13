const express=require('express');
const   port=process.env.PORT || 3000;

var app=express();


app.set('view engine', 'hbs');
app.use(express.static(__dirname+'/public'));
app.get('/',(req,res)=>{
  res.render('home.hbs',{
    welcomeMessage:"welcome to website",
    date:new Date().getFullYear()
  })

})

app.listen(port,()=>{
  console.log('app is running');
})
