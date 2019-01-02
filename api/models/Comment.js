module.exports = {
  attributes: {
    firstName: {
      type: 'string',
      required: true,
      maxLength: 50,
      example: 'Mary'
    },
    lastName: {
      type: 'string',
      required: true,
      maxLength: 50,
      example: 'Sue'
    },
    email: {
      type: 'string',
      required: true,
      unique: true,
      isEmail: true,
      maxLength: 200,
      example: 'mary.sue@example.com'
    },
  },
};
