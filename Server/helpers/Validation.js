const joi = require('@hapi/joi');
const RegExp = require('xregexp');

// To ensure that user type email correctly
const validateEmail = (email) => {
  const schema = joi.object({
    email: joi
      .string()
      .min(6)
      .required()
      .email(),
  });
  return schema.validate(email);
};

// To ensure that user enter both email and password
const validateLoginInfo = (userData) => {
  const schema = joi.object({
    email: joi
      .string()
      .min(6)
      .required()
      .email(),
    password: joi
      .string()
      .required()
      .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
  });
  return schema.validate(userData);
};

module.exports = { validateEmail, validateLoginInfo };