const express = require("express");

const app = express();
const PORT = 3001;
// here we applay some middle where function that perform some task example is logging some time
app.use(express.json());
// that is the encoded data that is come from the data postman
app.use(express.urlencoded())
// here we applay the middle where in the use function
app.use((req, res, next) => {
    console.log(`${req.method}:${req.url}`);
    next();
})


// that is the port were the server is runing on this
app.listen(PORT, () =>
  console.log(`Running express server at thie port ${PORT}`)
);

// THAT IS THE GET DATA FROM THE DATA THAT IS WRITTEN IN THE DYNAMICALLY

const userData = [
  {
    name: "taha",
    email: "taha@gmail.com",
  },
  {
    name: "bilal",
    email: "bilal@gmail.com",
  },
];
app.get('/data', (req, resporance) => {
  resporance.send(userData);
});


// that is the post request from the post to get data server
// request.body is that there all data is given
app.post('/data', (req, res) => {
    
    console.log(req.body);
    userData.push(req.body);
    res.send(201);

})