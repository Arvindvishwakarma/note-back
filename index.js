const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const noteRoutes = require('./routes/noteRoutes')

const app = express();
connectDB();
app.use(cors());
app.use(express.json());
app.use('/api/notes', noteRoutes);

app.listen(4000, ()=> console.log('Server is running!!!'));