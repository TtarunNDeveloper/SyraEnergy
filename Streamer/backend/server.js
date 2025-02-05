const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./routes/users');
const contentRoutes = require('./routes/content');

dotenv.config();
const app = express();
app.use(bodyParser.json());
connectDB();
app.use('/api/users', userRoutes);
app.use('/cpi/content', contentRoutes);
app.get('/', (req, res) => {
    res.send('Welcome to Streamer');
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});
app.use('/api/users', userRoutes);