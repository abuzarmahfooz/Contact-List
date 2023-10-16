const express = require('express');
const filePath = require('path');
const port =8000;

const app = express();

app.set('view engine', 'ejs');
app.set('views',filePath.join(__dirname,'views'));
app.use(express.urlencoded());
app.use(express.static('assets'));


var contactList = [
    {name:"John", email: "john@gmail.com"},
    {name:"abu", email: "abu@gmail.com"},
    {name:"rayy", email: "rayy@gmail.com"},
    {name:"zaid", email: "zaid@gmail.com"},
]

app.get('/', function(req,res){
     res.render('Home',{
         title:"Contact-List",
         contact_List: contactList
    });
});

app.get('/practice',function(req,res){
    return  res.render('practice', {title: "play-with-us"}) ;
});

app.post('/creat-contact', function(req,res){
    contactList.push({
        name : req.body.name,
        email : req.body.email
    })

    return res.redirect('/')
});



app.listen(port,function(err){
    if(err){console.log("error");}

    console.log
    (`Yup!my server running on Express`
     ,port);
})