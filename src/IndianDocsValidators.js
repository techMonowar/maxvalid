
// Add New Common Validation Functions Here



// Validate PAN Card Number
function validatePANCard(panCardNumber) {
    const panCardRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
    return panCardRegex.test(panCardNumber);
  }
  
  // Validate Aadhaar Card number
  function validateAadhaarCard(aadhaarCardNumber) {
    const aadhaarCardRegex = /^\d{4}\s\d{4}\s\d{4}$/;
    return aadhaarCardRegex.test(aadhaarCardNumber);
  }
  
  // Validate Voter ID Card number
  function validateVoterIDCard(voterIDCardNumber) {
    const voterIDCardRegex = /^[A-Z]{3}\d{7}$/;
    return voterIDCardRegex.test(voterIDCardNumber);
  }
//Drivig licence validator
function validateDL(drivingLicenceNumber){
    const drivingLicenceRegex = /^(([A-Z]{2}[0-9]{2})( )|([A-Z]{2}-[0-9]{2}))((19|20)[0-9][0-9])[0-9]{7}$/; 
    //Stirng accpeted will be AS24-20230000000 or AS24 20230000000 and any other format will be rejected.
    return drivingLicenceRegex.test(drivingLicenceNumber);
}
  // Export the validation functions
  module.exports = {
    validatePANCard,
    validateAadhaarCard,
    validateVoterIDCard,
    validateDL
  };
