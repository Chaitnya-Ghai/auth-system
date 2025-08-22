import users from '../models/userModel.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const signup =async (req, resp) => {
    try{
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
        console.log("Request body:", req.body);
        return resp.status(400).json({
            message:'Please provide all required fields: name, email, and password.',
            success: false,
            error: true
        });
        }

        const existingUser = await users.findOne({email});
        if(existingUser){
            console.log("User already exists:", existingUser);
            return resp.status(400).json({
                message: 'User already exists with this email.',
                success: false,
                error: true
            });
        }
        const user = new users({
            name,
            email,
            password
        });

        user.password = await bcrypt.hash(user.password , 12);
        await user.save();

        resp.status(201).json({
            message: 'User registered successfully! 🎉',
            success: true,
            error: false
        });
    } catch(err){
        console.error("Error during signup:", err.message);
        resp.status(500).send('Internal Server Error');
        return;
    }
   
}

export const login = async (req, resp) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            console.log("Request body:", req.body);
            return resp.status(400).json({
                message: 'Please provide both email and password.',
                success: false,
                error: true
            });
        }

        const user = await users.findOne({ email });
        if (!user) {
            console.log("User not found with email:", email);
            return resp.status(400).json({
                message: 'User not found with this email.',
                success: false,
                error: true
            });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            console.log("Password mismatch for user:", email);
            return resp.status(400).json({
                message: 'Invalid credentials.',
                success: false,
                error: true
            });
        }
        const jwtToken = jwt.sign({email:user.email, id:user._id}, process.env.JWT_SECRET, {expiresIn: '1d'});
        resp.status(200).json({
            message: 'Login successful! 🎉',
            success: true,
            error: false,
            token: jwtToken,
            email,
            name:user.name
        });

    } catch (err) {
        console.error("Error during login:", err.message);
        resp.status(500).send('Internal Server Error');
        return;
    }
}