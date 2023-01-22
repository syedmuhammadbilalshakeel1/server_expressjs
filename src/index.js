const express = require("express");

const app = express();
const PORT = 3001;

app.listen(PORT, () =>
  console.log(`Running express server at thie port ${PORT}`)
);

app.get('/data', (req, resporance) => {
  resporance.send([
    {
      name: 'taha',
      email: 'taha@gmail.com',
    },
     {
      name: 'bilal',
      email: 'bilal@gmail.com',
    },
  ]);
});
