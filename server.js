const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const DIST_DIR = path.join(__dirname, './dist');

app.use(express.static(DIST_DIR));

app.get('/*', function(req,res) {  
  res.sendFile(path.join(__dirname,'./dist/index.html'));
});

app.listen(port, () => console.log(`Listening on port ${port}`));
