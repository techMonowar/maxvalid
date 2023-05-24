const commonValidators = require ('./src/commonValidators');
const IndianDocsValidators = require ('./src/IndianDocsValidators');

//import any new files created 





module.exports = {
    ...IndianDocsValidators,
    ...commonValidators,
};

