const express = require('express');
const app = express();
const userRouter = require('./routes/users');

// Middleware to parse JSON bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Add User Router
app.use('/api/v1/user', userRouter);

/*
- Create new html file name home.html 
- add <h1> tag with message "Welcome to ExpressJs Tutorial"
- Return home.html page to client
*/
app.get('/home', (req,res) => {
  res.sendFile(__dirname + '/home.html');
});

// Test route to trigger error handling
app.get('/error', (req, res, next) => {
  const error = new Error('This is a test error!');
  next(error); 
});

/*
Add error handling middleware to handle below error
- Return 500 page with message "Server Error"
*/
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Server Error');
});

app.listen(process.env.port || 8081);

console.log('Web Server is listening at port '+ (process.env.port || 8081));