var app = require('express').createServer();
app.get('/', function(req, res) {
    res.send('Hello from Cloud Foundry');
});
app.listen(3000);
