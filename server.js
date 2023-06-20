const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));
// app.use('/public', express.static(path.join(__dirname, 'public')))
// Start the server

// app.get("/",function(req,res){
//   res.sendFile('index.html')
// });
app.listen(4000, () => {
  console.log('Server is running on http://localhost:4000');
});
