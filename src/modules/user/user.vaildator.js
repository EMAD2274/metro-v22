import Joi from "joi";


const signUpSchema = Joi.object({
    firstName:Joi.string().min(3).pattern(/^[a-zA-Z]{3,10}$/).required(),
    lastName:Joi.string().min(3).pattern(/^[a-zA-Z]{3,10}$/).required(),
    userName:Joi.string().min(3).pattern(/^[a-zA-Z]{3,20}$/).required(),
    email: Joi.string().email({tlds:{allow:["com","pro","net"]}}).required(),
    password: Joi.string().pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^& *])')).required(),
    repassword: Joi.ref("password"),
    ssn: Joi.number().min(14).required(),
    // phone: Joi.number().min(11).required(),
    verified : Joi.boolean(),
  
  })



  const loginSchema = Joi.object({
    // firstName:Joi.string().min(3).required(),
    // lastName:Joi.string().min(3).required(),
    // userName:Joi.string().min(3).required(),
    email: Joi.string().email({tlds:{allow:["com","pro","net"]}}).required(),
    password: Joi.string().pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^& *])')).required(),
    // repassword: Joi.ref("password"),
    // ssn: Joi.number().min(14).required(),
    // phone: Joi.number().min(11).required(),
    // verified : Joi.boolean(),
  
  })
  

  export {
    signUpSchema,
    loginSchema
    
  }