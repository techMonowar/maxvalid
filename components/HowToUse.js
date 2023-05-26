import Codehighlight from "./codeHighlighter"



const HowToUse = () => {
  return (
    <div id='how-to'>
        
Step 1: Install MaxValid

<Codehighlight  language='javascript' code={`npm install maxvalid`} />

Step 2: Import MaxValid into your project

<Codehighlight  language='javascript' code={`const MaxValid = require('maxvalid');`} />


Step 3: Create a new instance of MaxValid

<Codehighlight  language='javascript' code={`const validator = new MaxValid();`} />


Step 4:  Validate data

<Codehighlight  language='javascript' code={`const MaxValid = require('maxvalid');`} />


That it! You have now successfully used MaxValid to validate data in your project. Make sure to customize the validation rules according to your specific requirements.

For more advanced usage and additional validation rules, please refer to the MaxValid documentation available at GitHub - MaxValid Documentation.

If you encounter any issues or have questions, feel free to refer to the MaxValid GitHub repository GitHub - MaxValid and the provided contribution guide GitHub - MaxValid Contribution Guide for assistance.

Happy coding with MaxValid!
    </div>
  )
}

export default HowToUse
