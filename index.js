const express = require('express');
const app = express();

const path = require('path');

app.set("view engine","ejs");
app.set("views","views");

const blogposts = require('./data/werk.json');

app.use(express.static("public"));

app.get("/",function(request,response) {
  response.render("home.ejs",{posts: blogposts.work});
});

app.get("/portfolio",function(request,response) {
  response.render("portfolio.ejs", {posts: blogposts.work});
});

app.get('/portfolio/:postid', function(req,res){
  res.render('detailpagina', {
    post: blogposts.work[req.params.postid]
  });
});

app.get("/contact",function(request,response) {
  response.render("contact");
});


app.use(function(request,response) {
  response.statusCode = 404;
  response.render("404");
});
//heroku poort instellingen
app.set('port', (process.env.PORT || 5000));
app.listen(app.get('port'));
