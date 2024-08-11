const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const bannerRoutes = require('./routes/banner');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api/banner', bannerRoutes);

app.listen(5000, () => console.log('Server running on port 5000'));
