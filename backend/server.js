import connectDB from './config/db.js';
import express from 'express'
import dotenv from 'dotenv'
dotenv.config();
import router from './routes/productRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
const port = process.env.PORT || 5000;

connectDB(); //Connects to MongoDB
const app = express();

app.get('/', (req, res) => {
    res.json("API is Ruling...");
});

app.use('/api/products', router);

app.use(notFound);
app.use(errorHandler);


app.listen(port, () => console.log(`Server running on port ${port}`));