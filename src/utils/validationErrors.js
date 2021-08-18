const { validationResult } = require('express-validator');

const checkValidationErrors = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    res.status(400).json({
      status: '400 Bad Request',
      message: errors.array(),
    });
  } else {
    next();
  }
};

module.exports = { checkValidationErrors };
