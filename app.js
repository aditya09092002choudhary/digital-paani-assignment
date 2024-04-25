const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const bookRoutes = require('./routes/bookRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(authRoutes);
app.use(bookRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
