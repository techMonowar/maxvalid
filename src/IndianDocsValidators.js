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

  // Export the validation functions
  module.exports = {
    validatePANCard,
    validateAadhaarCard,
    validateVoterIDCard
  };