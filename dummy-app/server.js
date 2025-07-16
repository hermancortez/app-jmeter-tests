const express = require('express');
const app = express();
app.use(express.json());

app.get('/api/ping', (req, res) => {
  res.send('pong');
});

app.post('/api/echo', (req, res) => {
   res.json({ received: req.body });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});