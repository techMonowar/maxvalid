import Codehighlight from "./codeHighlighter"

//Example Normal Javascript Usage
const normaljs = `const { validateEmail, validateURL } = require('maxvalid');

const email = 'test@example.com';
const isValidEmail = validateEmail(email);

console.log(\`Email \${email} is valid: \${isValidEmail}\`);

const url = 'https://www.example.com';
const isValidURL = validateURL(url);

console.log(\`URL \${url} is valid: \${isValidURL}\`);`;

//Example Reactjs Usage

const reactjs = `import React from 'react';
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

export default App;`;


//Example Vueue.js Usage

const vueuejs = `<template>
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
</script>`;

//Example Angularjs Usage

const angularjs = `import { Component } from '@angular/core';
import { validateEmail } from 'maxvalid';

@Component({
  selector: 'app-root',
  template: \`
    <h1>MaxValid Angular Example</h1>
    <p>Email {{ email }} is valid: {{ isValidEmail.toString() }}</p>
  \`,
})
export class AppComponent {
  email = 'test@example.com';
  isValidEmail = validateEmail(this.email);
}`;


const UsageExamples = () => {
  return (
   <>
       <h2 className='mb-8 mt-1 font-bold text-3xl '>Usage Examples</h2>
      <div className='lg:grid w-full   lg:grid-cols-2 gap-4'> 
      <div className='rounded-md backdrop-blur-md bg-white/30 p-4 shadow-md shadow-white-400  border-gray-500'>
      <h3 className='font-bold text-lg'>CommonJS (Node.js) Usage</h3>
        <Codehighlight className='rounded-md'  language='javascript' code={normaljs} /></div>
       
        <div className='rounded-md backdrop-blur-md bg-white/30 p-4 shadow-md shadow-white-400  border-gray-500'>
        <h3 className='font-bold text-lg'>React Usage</h3>
       <Codehighlight  language='javascript' code={reactjs} /></div>


       <div className='rounded-md backdrop-blur-md bg-white/30 p-4 shadow-md shadow-white-400  border-gray-500'>
       <h3 className='font-bold text-lg'>Vue.js Usage</h3>
       <Codehighlight  language='javascript' code={vueuejs} /></div>

       <div className='rounded-md mb backdrop-blur-md bg-white/30 p-4 shadow-md shadow-white-400  border-gray-500'>
       <h3 className='font-bold text-lg'>Angular Usage</h3>
       <Codehighlight  language='javascript' code={angularjs} /></div>
      </div>
   </>
  )
}

export default UsageExamples
