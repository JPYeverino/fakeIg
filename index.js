// Dependencies
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const errorHandler = require('./middlewares/errorHandler');
const mongoose = require('mongoose');
const postRoutes = require('./routes/post');


const app = express();

// app.use(cors);
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/rest-api-node", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

app.use('/api/post', postRoutes);
// app.get('/api/post', (req, res) => {
//   res.send({"message":"home"});
// });

app.use(errorHandler);

app.listen(8000, () => {
  console.log('App running on http://localhost:8000')
});