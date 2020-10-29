const express = require('express');
const cors = require('cors');
require('dotenv').config({ path: 'variables.env' });
const conectarDB = require('./db/config');
const app = express();

conectarDB();

app.use(cors());
app.use(express.json());

app.use('/api', require('./routes'));

app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en el puerto: ${process.env.PORT}`);
});