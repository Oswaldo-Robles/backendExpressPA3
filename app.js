const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;
const apiRoutes = require('./src/router/apiRoutes');

app.use(cors());
//middleware para permitir la comunicación con el frontend

app.use(apiRoutes);

app.use(express.json());
//middleware para que el servidor pueda entender y leer datos en formato JSON

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

