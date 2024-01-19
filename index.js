const express = require('express');
const cors = require('cors'); // 引入 cors 模块
const app = express();
const states = require('./statesData');

app.use(cors());

// Route for handling state search
app.get('/states', (req, res) => {
  const query = req.query['q'];
  // Check if query is defined before using toLowerCase()
  const filteredStates = query
    ? // @ts-ignore
      states.filter((state) => state.toLowerCase().includes(query.toLowerCase())).slice(0, 8)
    : states.slice(0, 8);
  res.json(filteredStates);
});

app.get('/', (req, res) => {
  res.send('Express on Vercel');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
