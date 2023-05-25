# MaxValid

MaxValid is an npm package that provides a comprehensive set of validation functions for common data types. It offers easy-to-use functions to validate email addresses, URLs, phone numbers, credit card numbers, and more. The package is designed to be customizable and extensible to accommodate different validation requirements.

## Installation

You can install MaxValid using npm:

```shell
npm install maxvalid
```

## Usage

### CommonJS (Node.js) Usage

```javascript
const { validateEmail, validateURL } = require('maxvalid');

const email = 'test@example.com';
const isValidEmail = validateEmail(email);

console.log(`Email ${email} is valid: ${isValidEmail}`);

const url = 'https://www.example.com';
const isValidURL = validateURL(url);

console.log(`URL ${url} is valid: ${isValidURL}`);
```

### React Usage

```jsx
import React from 'react';
import { validateEmail } from 'maxvalid';

function App() {
  const email = 'test@example.com';
  const isValidEmail = validateEmail(email);

  return (
    <div>
      <h1>MaxValid React Example</h1>
      <p>Email {email} is valid: {isValidEmail.toString()}</p>
    </div>
  );
}

export default App;
```

### Vue.js Usage

```vue
<template>
  <div>
    <h1>MaxValid Vue.js Example</h1>
    <p>Email {{ email }} is valid: {{ isValidEmail.toString() }}</p>
  </div>
</template>

<script>
import { validateEmail } from 'maxvalid';

export default {
  data() {
    return {
      email: 'test@example.com',
      isValidEmail: false,
    };
  },
  mounted() {
    this.isValidEmail = validateEmail(this.email);
  },
};
</script>
```

### Angular Usage

```typescript
import { Component } from '@angular/core';
import { validateEmail } from 'maxvalid';

@Component({
  selector: 'app-root',
  template: `
    <h1>MaxValid Angular Example</h1>
    <p>Email {{ email }} is valid: {{ isValidEmail.toString() }}</p>
  `,
})
export class AppComponent {
  email = 'test@example.com';
  isValidEmail = validateEmail(this.email);
}
```

### Vanilla JavaScript Usage

```html
<!DOCTYPE html>
<html>
<head>
  <title>MaxValid Vanilla JavaScript Example</title>
</head>
<body>
  <h1>MaxValid Vanilla JavaScript Example</h1>
  <script src="path/to/maxvalid.js"></script>
  <script>
    const email = 'test@example.com';
    const isValidEmail = MaxValid.validateEmail(email);

    const emailElement = document.createElement('p');
    emailElement.textContent = `Email ${email} is valid: ${isValidEmail.toString()}`;
    document.body.appendChild(emailElement);
  </script>
</body>
</html>
```

Make sure to replace `'path/to/maxvalid.js'` with the actual path to the MaxValid library file.

## Available Validation Functions

MaxValid provides a wide range of validation functions for various data types. Here are some of the available functions:

- `validateEmail`: Validates an email address.
- `validateURL`: Validates a URL.
- `validatePhoneNumber`: Validates a phone number.
- `validateCreditCardNumber`: Validates a credit card number.
- `validateUsername`: Validates a username.
- `validatePassword`: Validates a password.
-

 `validateDate`: Validates a date.
- `validateIPAddress`: Validates an IP address.
- `validateColorCode`: Validates a hexadecimal color code.
- `validateSSN`: Validates a social security number (SSN).
- `validatePostalCode`: Validates a postal code.
- `validatePassportNumber`: Validates a passport number.
- `validateCurrency`: Validates a currency.
- `validateHexadecimalNumber`: Validates a hexadecimal number.
- `validateMACAddress`: Validates a MAC address.
- `validateIBAN`: Validates an IBAN (International Bank Account Number).
- `validateCVV`: Validates a credit card CVV (Card Verification Value) code.
- `validateISBN`: Validates an ISBN (International Standard Book Number).
- `validateUUID`: Validates a UUID (Universally Unique Identifier).
- `validateSocialMediaUsername`: Validates a social media username.
- And more...

Please refer to the [documentation](https://maxvalid.js.org/documentation) for the full list of available validation functions.

## Contributing

Contributions are welcome! If you have any suggestions, improvements, or additional validation functions to add, feel free to open an issue or submit a pull request on the [GitHub repository](https://github.com/techmonowar/maxvalid).

## License

This project is licensed under the [MIT License](LICENSE).
