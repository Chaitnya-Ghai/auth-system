import express from 'express';
import  dotenv from 'dotenv';
import connectDB from './configs/db.js';
import bodyParser from 'body-parser';
import cors from 'cors';
import router from './routes/authRoutes.js';
import productRouter from './routes/productRoute.js';

const app = express();
dotenv.config();
connectDB();
const PORT = process.env.PORT || 3000;
// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Routes
app.use('/auth' , router)
app.use('/products', productRouter);
app.get('/', (req, res) => {
    res.send('Hello, your backend is working! 🚀');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});