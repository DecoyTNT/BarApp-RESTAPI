const express = require('express');
const cors = require('cors');
const conectarDB = require('./db/config');
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', require('./routes'));

conectarDB();

app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en el puerto: ${process.env.PORT}`);
});