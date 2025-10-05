const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

// Rutas principales
const comidasRoutes = require("./routes/comidas");
const pedidosRoutes = require("./routes/pedidos");

app.use("/api/comidas", comidasRoutes);
app.use("/api/pedidos", pedidosRoutes);

// Endpoint de health check
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

// Ruta raíz
app.get('/', (req, res) => {
  console.log('Ruta / llamada');
  res.send('¡Bienvenido a la API de DeliLunch! La API está corriendo.');
});

// ✅ Usa el puerto dinámico que Render inyecta
const PORT = process.env.PORT || 4000;

if (require.main === module) {
  // ✅ Escucha en 0.0.0.0 para que Render pueda acceder
  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
  });
} else {
  module.exports = app;
}
