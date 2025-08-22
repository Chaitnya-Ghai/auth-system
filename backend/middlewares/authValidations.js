import Joi from "joi";

export const signUpVali = (req, resp , next)=>{
    const schema = Joi.object({
        name: Joi.string().required().min(3).max(30).messages({
            'string.base': 'Name must be a string',
            'string.empty': 'Name cannot be empty',
            'string.min': 'Name must be at least 3 characters long',
            'string.max': 'Name must be at most 30 characters long',
            'any.required': 'Name is required'
        }),

        email: Joi.string().email().required().messages({
            'string.base': 'Email must be a string',
            'string.email': 'Email must be a valid email address',
            'string.empty': 'Email cannot be empty',
            'any.required': 'Email is required'
        }),

        password: Joi.string().required().min(6).max(30).messages({
            "string.base": 'Password must be a string',
            'string.empty': 'Password cannot be empty',
            'string.min': 'Password must be at least 6 characters long',
            'string.max': 'Password must be at most 30 characters long',
            'any.required': 'Password is required'
        })
    });

    const {error} = schema.validate(req.body);

    if(error){
        return resp.status(400).json({
            message : error.details[0].message,
            success: false,
            error: true
        })
    }
    next();
}


export const loginVali = (req, resp , next)=>{
    const schema = Joi.object({
        email: Joi.string().email().required().messages({
            'string.base': 'Email must be a string',
            'string.email': 'Email must be a valid email address',
            'string.empty': 'Email cannot be empty',
            'any.required': 'Email is required'
        }),

        password: Joi.string().required().min(6).max(30).messages({
            "string.base": 'Password must be a string',
            'string.empty': 'Password cannot be empty',
            'string.min': 'Password must be at least 6 characters long',
            'string.max': 'Password must be at most 30 characters long',
            'any.required': 'Password is required'
        })
    });

    const {error} = schema.validate(req.body);

    if(error){
        return resp.status(400).json({
            message : error.details[0].message,
            success: false,
            error: true
        })
    }
    next();
}
