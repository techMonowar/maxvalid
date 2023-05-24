// Add New Common Validation Functions Here


// Validate email address
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  // Validate URL
  function validateURL(url) {
    const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
    return urlRegex.test(url);
  }
  
  // Validate phone number
  function validatePhoneNumber(phoneNumber) {
    const phoneNumberRegex = /^\d{10}$/;
    return phoneNumberRegex.test(phoneNumber);
  }
  
  // Validate credit card number
  function validateCreditCardNumber(creditCardNumber) {
    const creditCardNumberRegex = /^\d{16}$/;
    return creditCardNumberRegex.test(creditCardNumber);
  }
  
  // Validate username (alphanumeric characters, underscore, and hyphen only)
  function validateUsername(username) {
    const usernameRegex = /^[a-zA-Z0-9_-]+$/;
    return usernameRegex.test(username);
  }
  
  // Validate password (at least 8 characters, at least one uppercase letter, one lowercase letter, and one number)
  function validatePassword(password) {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    return passwordRegex.test(password);
  }
  
  // Validate date (ISO 8601 format)
  function validateDate(date) {
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    return dateRegex.test(date);
  }
  
  // Validate IP address (IPv4)
  function validateIPAddress(ipAddress) {
    const ipAddressRegex = /^(\d{1,3}\.){3}\d{1,3}$/;
    return ipAddressRegex.test(ipAddress);
  }
  
  // Validate hexadecimal color code (#rrggbb)
  function validateColorCode(colorCode) {
    const colorCodeRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
    return colorCodeRegex.test(colorCode);
  }
  
  // Validate social security number (SSN) (###-##-#### or ######### format)
  function validateSSN(ssn) {
    const ssnRegex = /^\d{3}-\d{2}-\d{4}$|^\d{9}$/;
    return ssnRegex.test(ssn);
  }
  
  // Validate postal code (US ZIP code)
  function validatePostalCode(postalCode) {
    const postalCodeRegex = /^\d{5}(-\d{4})?$/;
    return postalCodeRegex.test(postalCode);
  }
  
  // Validate passport number (alphanumeric characters)
  function validatePassportNumber(passportNumber) {
    const passportNumberRegex = /^[a-zA-Z0-9]+$/;
    return passportNumberRegex.test(passportNumber);
  }
  
  // Validate currency (decimal number with optional thousands separator and two decimal places)
  function validateCurrency(currency) {
    const currencyRegex = /^[1-9]\d{0,2}(,\d{3})*(\.\d{2})?$/;
    return currencyRegex.test(currency);
  }
  
  // Validate hexadecimal number
  function validateHexadecimalNumber(hexNumber) {
    const hexNumberRegex = /^[0-9A-Fa-f]+$/;
    return hexNumberRegex.test(hexNumber);
  }
  
  // Validate MAC address (XX:XX:XX:XX:XX:XX format)
  function validateMACAddress(macAddress) {
    const macAddressRegex = /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/;
    return macAddressRegex.test(macAddress);
  }
  
  // Validate IBAN (International Bank Account Number)
  function validateIBAN(iban) {
    const ibanRegex = /^[A-Z]{2}\d{2}[A-Za-z0-9]{4}\d{7}([A-Za-z0-9]?){0,16}$/;
    return ibanRegex.test(iban);
  }
  
  // Validate credit card CVV (Card Verification Value) code
  function validateCVV(cvv) {
    const cvvRegex = /^\d{3,4}$/;
    return cvvRegex.test(cvv);
  }
  
  // Validate ISBN (International Standard Book Number)
  function validateISBN(isbn) {
    const isbnRegex = /^(?:ISBN(?:-1[03])?:? )?(?=[-0-9 ]{17}$|[-0-9X ]{13}$|[0-9X]{10}$)(?:97[89][- ]?)?(?:[0-9]{1,5}[- ]?)?(?:[0-9]+[- ]?){2}[0-9X]+$/;
    return isbnRegex.test(isbn);
  }
  
  // Validate UUID (Universally Unique Identifier)
  function validateUUID(uuid) {
    const uuidRegex = /^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$/;
    return uuidRegex.test(uuid);
  }
  
  // Validate social media username (alphanumeric characters and underscores only)
  function validateSocialMediaUsername(username) {
    const usernameRegex = /^[a-zA-Z0-9_]+$/;
    return usernameRegex.test(username);
  }
  
  // Validate US ZIP code
  function validateUSPostalCode(postalCode) {
    const usPostalCodeRegex = /^\d{5}(-\d{4})?$/;
    return usPostalCodeRegex.test(postalCode);
  }
  
  // Validate UK postal code
  function validateUKPostalCode(postalCode) {
    const ukPostalCodeRegex = /^(GIR\s?0AA|[A-PR-UWYZ](\d{1,2}|([A-HK-Y]\d|[A-HK-Y]\d([ABEHMNPRV-Y]))|[A-HK-Y]\d{1,2}[ABEHMNPRV-Y]))\s?\d[ABD-HJLN-UW-Z]{2}$/;
    return ukPostalCodeRegex.test(postalCode);
  }
  
  // Validate Canadian postal code
  function validateCanadianPostalCode(postalCode) {
    const canadianPostalCodeRegex = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;
    return canadianPostalCodeRegex.test(postalCode);
  }
  
  // Validate Australian postal code
  function validateAustralianPostalCode(postalCode) {
    const australianPostalCodeRegex = /^\d{4}$/;
    return australianPostalCodeRegex.test(postalCode);
  }
  
  // Validate German postal code
  function validateGermanPostalCode(postalCode) {
    const germanPostalCodeRegex = /^\d{5}$/;
    return germanPostalCodeRegex.test(postalCode);
  }

  
  // Validate US ZIP code
  function validateUSPostalCode(postalCode) {
    const usPostalCodeRegex = /^\d{5}(-\d{4})?$/;
    return usPostalCodeRegex.test(postalCode);
  }
  
  // Validate UK postal code
  function validateUKPostalCode(postalCode) {
    const ukPostalCodeRegex = /^(GIR\s?0AA|[A-PR-UWYZ](\d{1,2}|([A-HK-Y]\d|[A-HK-Y]\d([ABEHMNPRV-Y]))|[A-HK-Y]\d{1,2}[ABEHMNPRV-Y]))\s?\d[ABD-HJLN-UW-Z]{2}$/;
    return ukPostalCodeRegex.test(postalCode);
  }
  
  // Validate Canadian postal code
  function validateCanadianPostalCode(postalCode) {
    const canadianPostalCodeRegex = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;
    return canadianPostalCodeRegex.test(postalCode);
  }
  
  // Validate Australian postal code
  function validateAustralianPostalCode(postalCode) {
    const australianPostalCodeRegex = /^\d{4}$/;
    return australianPostalCodeRegex.test(postalCode);
  }
  
  // Validate German postal code
  function validateGermanPostalCode(postalCode) {
    const germanPostalCodeRegex = /^\d{5}$/;
    return germanPostalCodeRegex.test(postalCode);
  }

  
  
 // Export the validation functions
module.exports = {
    validateEmail,
    validateURL,
    validatePhoneNumber,
    validateCreditCardNumber,
    validateUsername,
    validatePassword,
    validateDate,
    validateIPAddress,
    validateColorCode,
    validateSSN,
    validatePostalCode,
    validatePassportNumber,
    validateCurrency,
    validateHexadecimalNumber,
    validateMACAddress,
    validateIBAN,
    validateCVV,
    validateISBN,
    validateUUID,
    validateSocialMediaUsername,
    validateUSPostalCode,
    validateUKPostalCode,
    validateCanadianPostalCode,
    validateAustralianPostalCode,
    validateGermanPostalCode,
  };