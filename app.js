const express = require('express');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 3010;

app.listen(PORT, () => {
  console.log(`Server is listen on http://localhos:${PORT}`);
});
