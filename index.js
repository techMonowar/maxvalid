// Validation functions
const commonValidators = require ('./src/commonValidators');
const IndianDocsValidators = require ('./src/IndianDocsValidators');





module.exports = {
    ...IndianDocsValidators,
    ...commonValidators,
};

