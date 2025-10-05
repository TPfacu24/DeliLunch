const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());              
app.use(express.json());      
const comidasRoutes = require("./routes/comidas");
const pedidosRoutes = require("./routes/pedidos");
app.use("/api/comidas", comidasRoutes);
app.use("/api/pedidos", pedidosRoutes);
app.get('/health', (req, res) => {
    res.status(200).send('OK');
});
app.get('/', (req, res) => {
  console.log('Ruta / llamada');
  res.send('¡Bienvenido a la API de DeliLunch! La API está corriendo.');
});
const PORT = 4000;
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });
} else {
  
  module.exports = app;
}
