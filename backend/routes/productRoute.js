import express from 'express';
import products from '../models/products.js';
import { ensureAuthenticated } from '../middlewares/productAuthMw.js';

const prodRouter = express.Router();

// Route to get all products
prodRouter.get('/all', ensureAuthenticated, (req, res) => {
    res.status(200).json({
       products
    });
});

export default prodRouter;
