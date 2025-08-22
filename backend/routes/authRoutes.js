import express from 'express';
import { signup } from '../controllers/authController.js';
import { login } from '../controllers/authController.js';
import { signUpVali , loginVali } from '../middlewares/authValidations.js';

const router = express.Router();
router.post('/register' , signUpVali , signup );
router.post('/login' ,loginVali , login);

export default router;

