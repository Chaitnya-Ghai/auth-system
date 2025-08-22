import jwt from 'jsonwebtoken';

export const ensureAuthenticated = (req, res, next) => {
    const auth = req.headers['authorization'];
    if(!auth){
        return res.status(401).json({
            message: 'Authorization header is missing',
            success: false,
            error: true
        });
    }
    try{
        const decoded = jwt.verify(auth , process.env.JWT_SECRET);
        req.user = decoded;
        next();
    }catch(err){
        console.error("Error in authentication middleware:", err.message);
        return res.status(500).json({
            message: 'Unauthorized, JWT Token is required',
            success: false,
            error: true
        });

    }
};

