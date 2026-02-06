var express = require('express');
var app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

// Middleware to serve maintenance page for ALL routes
app.use((req, res, next) => {
    console.log(`Request received for: ${req.url}`); // Debugging log
    res.render('home'); 
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log("Catch the action at http://localhost:" + port);
});
