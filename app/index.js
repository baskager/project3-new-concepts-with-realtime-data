const express = require('express'),
app = express(),
http = require('http').Server(app),
debug = require('debug')('kager-server'),
handlebars  = require('express-handlebars'),
config = require("./config"),
port = config.port,
Category = require('./src/Category.class'),
categories = [];

categories.push(new Category('basilicum', 'basilicum', 'https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/basil-leaves-herb.jpg?itok=8yYbXuON  '));
categories.push(new Category('chilli\'s', 'chillis', 'https://images-na.ssl-images-amazon.com/images/I/71Bl8JbkPEL._SY355_.jpg'));
categories.push(new Category('oregano', 'oregano', 'https://fthmb.tqn.com/mCeNyBNp8C7uq_cYnt2he-ZrFNw=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/130136311-56a47d6d5f9b58b7d0d742ca.jpg'));

app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Cache templates on productions
if(process.env.NODE_ENV === 'production') {
    app.enable('view cache');
}

// Define directory from which static files are served
app.use(express.static('public'));

app.get('/', function(req, res) {
    res.render('categories', {
        categories: categories
    });
});

app.get('/:categorySlug', function(req, res) {
    let category = categories.filter(category => category.slug === req.params.categorySlug)[0];

    res.render('category-items', {
        category: category,
        title: category.name
    });
});

app.get('/:categoryName/:itemName', function(req, res) {
    res.render('item');
});

// app.get('/project-detail', function(req, res) {
//     res.render('project-detail');
// });





http.listen(port, function(){
    console.log('Server listening on port ' + port)
})