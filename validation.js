const Joi = require("@hapi/joi");

const passwordRegex = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/);

const signupSchema = Joi.object({
    name: Joi.string()
        .alphanum()
        .min(4)
        .required(),
    email: Joi.string()
        .email()
        .min(6)
        .required(),
    password: Joi.string()
        .min(8)
        .pattern(passwordRegex),
    repeat_password: Joi.ref("password")
}).with("password", "repeat_password");

const loginSchema = Joi.object({
    name: Joi.string()
        .alphanum()
        .min(4),
    email: Joi.string()
        .email()
        .min(6),
    password: Joi.string()
        .min(8)
        .pattern(passwordRegex)
}).xor("name", "email");

const signupValidation = data => signupSchema.validate(data);

const loginValidation = data => loginSchema.validate(data);

module.exports.signupValidation = signupValidation;
module.exports.loginValidation = loginValidation;
