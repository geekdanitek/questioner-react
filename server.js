const express = require('express');
const path = require('path');

const app = express();

if (process.env.NODE_ENV === 'production') {
  const buildPath = path.resolve(__dirname, './dist');
  const filePath = path.join(buildPath, 'index.html');

  app.use(express.static(buildPath));
  app.get('*', (req, res) => {
    res.sendFile(filePath);
  });
}

const port = process.env.PORT || 8000;

app.listen(port, function(error){
    if(error) return console.log(error)
    return console.log(`app started on port ${port}`);
});
