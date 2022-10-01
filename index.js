const express = require('express');
const dotenv = require('dotenv').config();
const colors = require('colors')
const {errorHandler} = require('./middleware/errorMiddleware')
const app = express();
const cors = require('cors')

app.use(cors())

const connectDB = require("./config/db.js");

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/goals',require('./routes/goalRoutes'))
app.use('/api/users',require('./routes/userRoutes'))

app.use(errorHandler)  //change default error

const port = process.env.PORT || 3001;
connectDB()
app.listen(port, () => console.log(`Server running on port ${port}`))
