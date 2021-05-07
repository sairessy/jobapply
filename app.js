const express = require('express');
const app = express();
const port = 3000 || process.env.PORT;
app.use(express.static('public'));
app.listen(port, () => {
  console.log('Listening...');
});

app.get('/job/*', (req, res) => {
  res.sendFile(__dirname + '/' + 'public/job.html');
});