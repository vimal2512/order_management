import express from 'express';
import db from './models/index.js';
import orderRoutes from './routes/order.routes.js'

const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());
app.use('/api/orders',orderRoutes);


(async () => {
  try {
    await db.sequelize.authenticate();
    console.log('Connected to PostgreSQL');
    await db.sequelize.sync();
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (error) {
    console.error('Unable to connect to DB:', error);
  }
})();