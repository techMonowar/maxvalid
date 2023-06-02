
// Add New Common Validation Functions Here



// Validate PAN Card Number
function validatePANCard(panCardNumber) {
    const panCardRegex = /^[A-Z]{3}[PCHABGJLFT]{1}[A-Z]{1}[0-9]{4}[A-Z]{1}$/; 
    //According to: https://incometaxindia.gov.in/Forms/tps/1.Permanent%20Account%20Number%20(PAN).pdf
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

  // Export the validation functions
  module.exports = {
    validatePANCard,
    validateAadhaarCard,
    validateVoterIDCard
  };
