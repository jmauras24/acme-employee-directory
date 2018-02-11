const express = require('express');
const app = express();
const path = require('path');
const nunjucks = require('nunjucks');
nunjucks.configure({noCache: true});

app.set('view engine', 'html');
app.engine('html',nunjucks.render);

const db = require('./db');
const { Employee } = db.models;


app.use((req, res, next) =>{
  res.locals.url = req.url;
  next();
})

app.get('/',(req, res, next) => {
  Employee.findAll()
  .then(employees => {
    console.log(`${employees}`)
    res.send(`EMPLOYESS ${employees}`)
  })
  .catch(next);
})

app.use('/employees', require('./routes/index'));

const port = process.env.PORT || 3000;
app.listen(port, () =>{
  console.log(`listening on port ${port}`)
})

db.sync();
