const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const DIST_DIR = path.join(__dirname, './dist');

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

app.use(express.static(DIST_DIR));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname,'./dist/index.html'));
});
