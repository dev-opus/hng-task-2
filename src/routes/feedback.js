const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const { checkValidationErrors } = require('../utils/validationErrors');
const { transporter } = require('../utils/sendMail');
const nodemailer = require('nodemailer');

router.post(
  '/feedback',
  body('email').isEmail(),
  checkValidationErrors,
  async (req, res, next) => {
    try {
      res.json({
        message:
          'Thank you for contacting Victor, please check your email for further details.',
      });

      await transporter.sendMail({
        from: process.env.USER_EMAIL,
        to: req.body.email,
        subject: 'Thanks for contacting Victor',
        text: `
            Hey @${req.body.name} 👋🏿
    
            Thank you for contacting Victor, He will
            reply to you as soon as possible. Do have a 
            wonderful day😇
          `,
      });
    } catch (error) {
      console.error(error);
    }
  }
);

module.exports = router;
