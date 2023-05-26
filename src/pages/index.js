import Header from '../../components/Header'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Analytics from '../../components/analytics'
import Schema from '../../components/schema'
// import UsageExamples from '../../components/UsageExamples'
import GoogleTagManagerNoScript from '../../components/GoogleTagNoScript'
import Codehighlight from '../../components/codeHighlighter'

const inter = Inter({ subsets: ['latin'] })


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


export default function Home() {
  return (
    <>
    <Header />
    <Analytics />
    <Schema />
  <GoogleTagManagerNoScript />

   

    <main className="flex  min-h-screen flex-col items-center justify-between lg:p-24 pt-20 p-8">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0  flex  w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-400 dark:bg-zinc-400/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-300/30">
          Get started by&nbsp;
          <code className="font-mono font-bold">npm install maxvalid</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-white dark:via-white lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-1 lg:pointer-events-auto lg:p-0"
            href="https://linkedin.com/in/techmonowar"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/monowarg.png"
              alt="Monowar Hussain"
              className="rounded-full lg:h-14  lg:w-14 h-9 w-9"
              width={50}
              height={50}
              priority
            />
            <h1 className="font-bold text-sm">techmonowar</h1>
          </a>
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-300/10 after:dark:from-sky-200 after:dark:via-[#0131fe]/40 before:lg:h-[360px]">
        {/* <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/nextk.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        /> */}
        <h1 className='mt-8 text-5xl mb-8 lg:text-6xl font-extrabold'>maxvalid</h1>
      </div>

      <p className='text-justify bg-white backdrop-blur-sm border-gray-900 bg-gradient-to-tr   rounded-lg p-4 text-lg mb-8 '>MaxValid is an <code> npm package</code> that provides a comprehensive set of validation functions for common data types. It offers easy-to-use functions to validate email addresses, URLs, phone numbers, credit card numbers, and more. The package is designed to be customizable and extensible to accommodate different validation requirements.</p>

      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-3 lg:text-center">
        <a
         href='#documentation'
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-400 hover:dark:bg-neutral-400/30"
          rel="noopener noreferrer"
        >
          <h2 className={`${inter.className} mb-3 text-2xl font-semibold`}>
            Docs{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p
            className={`${inter.className} m-0 max-w-[30ch] text-sm opacity-50`}
          >
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="#functions"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-400 hover:dark:bg-neutral-400/30"
         
        >
          <h2 className={`${inter.className} mb-3 text-2xl font-semibold`}>
            Learn{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p
            className={`${inter.className} m-0 max-w-[30ch] text-sm opacity-50`}
          >
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

       

        <a
          href="https://github.com/techMonowar/maxvalid/blob/master/CONTRIBUTING.md"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-400 hover:dark:bg-neutral-400/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`${inter.className} mb-3 text-2xl font-semibold`}>
            Contribute to MaxValid!{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p
            className={`${inter.className} m-0 max-w-[30ch] text-sm opacity-90`}
          >
            We appreciate your interest in improving the package. Here is a guide to help you get started with contributing.
          </p>
        </a>
      </div>

      {/* Usage Examples  */}

      <h2 className='mb-8 mt-1 font-bold text-3xl '>Usage Examples</h2>
      <div className='lg:grid w-full mb-6  lg:grid-cols-2 gap-4'> 
      <div className='rounded-md backdrop-blur-md bg-white/30 p-4 shadow-md shadow-white-400  border-gray-500'>
      <h3 className='font-bold text-lg'>CommonJS (Node.js) Usage</h3>
        <Codehighlight className='rounded-md'  language='javascript' code={normaljs} /></div>
       
        <div className='rounded-md backdrop-blur-md bg-white/30 p-4 shadow-md shadow-white-400  border-gray-500'>
        <h3 className='font-bold text-lg'>React Usage</h3>
       <Codehighlight  language='javascript' code={reactjs} /></div>


       <div className='rounded-md backdrop-blur-md bg-white/30 p-4 shadow-md shadow-white-400  border-gray-500'>
       <h3 className='font-bold text-lg'>Vue.js Usage</h3>
       <Codehighlight  language='javascript' code={vueuejs} /></div>

       <div className='rounded-md backdrop-blur-md bg-white/30 p-4 shadow-md shadow-white-400  border-gray-500'>
       <h3 className='font-bold text-lg'>Angular Usage</h3>
       <Codehighlight  language='javascript' code={angularjs} /></div>
      </div>


{/* Validation Functions*/}

      <div id='functions' className='rounded-md  flex flex-col  text-center gap-4 text-lg w-full backdrop-blur-md bg-white/30 p-8 shadow-md shadow-white-400  border-gray-500'>
       <h3 className='font-bold text-center text-2xl mb-4'>Available Validation Functions</h3>
       <p className='opacity-50 text center'>MaxValid provides a wide range of validation functions for various data types. Here are some of the available functions:</p>
   <div className=' flex flex-wrap flex-grow  gap-4 text-left w-full '>  
<li className='text-xl bg-white/50 w-fit list-none hover:bg-white p-2 rounded-md'><code className="text-green-600 mr-2 hover:bg-yellow-200 p-2 rounded-lg hover:text-black ">validateEmail</code>: Validates an email address.</li>
<li className='text-xl bg-white/50 w-fit list-none hover:bg-white p-2 rounded-md'><code className="text-green-600 mr-2 hover:bg-yellow-200 p-2 rounded-lg hover:text-black ">validateURL</code>: Validates a URL.</li>
<li className='text-xl bg-white/50 w-fit list-none hover:bg-white p-2 rounded-md'><code className="text-green-600 mr-2 hover:bg-yellow-200 p-2 rounded-lg hover:text-black ">validatePhoneNumber</code>: Validates a phone number.</li>
<li className='text-xl bg-white/50 w-fit list-none hover:bg-white p-2 rounded-md'><code className="text-green-600 mr-2 hover:bg-yellow-200 p-2 rounded-lg hover:text-black ">validateCreditCardNumber</code>: Validates a credit card number.</li>
<li className='text-xl bg-white/50 w-fit list-none hover:bg-white p-2 rounded-md'><code className="text-green-600 mr-2 hover:bg-yellow-200 p-2 rounded-lg hover:text-black ">validateUsername</code>: Validates a username.</li>
<li className='text-xl bg-white/50 w-fit list-none hover:bg-white p-2 rounded-md'><code className="text-green-600 mr-2 hover:bg-yellow-200 p-2 rounded-lg hover:text-black ">validatePassword</code>: Validates a password.</li>
<li className='text-xl bg-white/50 w-fit list-none hover:bg-white p-2 rounded-md'><code className="text-green-600 mr-2 hover:bg-yellow-200 p-2 rounded-lg hover:text-black ">validateDate</code>: Validates a date.</li>
<li className='text-xl bg-white/50 w-fit list-none hover:bg-white p-2 rounded-md'><code className="text-green-600 mr-2 hover:bg-yellow-200 p-2 rounded-lg hover:text-black ">validateIPAddress</code>: Validates an IP address.</li>
<li className='text-xl bg-white/50 w-fit list-none hover:bg-white p-2 rounded-md'><code className="text-green-600 mr-2 hover:bg-yellow-200 p-2 rounded-lg hover:text-black ">validateColorCode</code>: Validates a hexadecimal color code.</li>
<li className='text-xl bg-white/50 w-fit list-none hover:bg-white p-2 rounded-md'><code className="text-green-600 mr-2 hover:bg-yellow-200 p-2 rounded-lg hover:text-black ">validateSSN</code>: Validates a social security number (SSN).</li>
<li className='text-xl bg-white/50 w-fit list-none hover:bg-white p-2 rounded-md'><code className="text-green-600 mr-2 hover:bg-yellow-200 p-2 rounded-lg hover:text-black ">validatePostalCode</code>: Validates a postal code.</li>
<li className='text-xl bg-white/50 w-fit list-none hover:bg-white p-2 rounded-md'><code className="text-green-600 mr-2 hover:bg-yellow-200 p-2 rounded-lg hover:text-black ">validatePassportNumber</code>: Validates a passport number.</li>
<li className='text-xl bg-white/50 w-fit list-none hover:bg-white p-2 rounded-md'><code className="text-green-600 mr-2 hover:bg-yellow-200 p-2 rounded-lg hover:text-black ">validateCurrency</code>: Validates a currency.</li>
<li className='text-xl bg-white/50 w-fit list-none hover:bg-white p-2 rounded-md'><code className="text-green-600 mr-2 hover:bg-yellow-200 p-2 rounded-lg hover:text-black ">validateHexadecimalNumber</code>: Validates a hexadecimal number.</li>
<li className='text-xl bg-white/50 w-fit list-none hover:bg-white p-2 rounded-md'><code className="text-green-600 mr-2 hover:bg-yellow-200 p-2 rounded-lg hover:text-black ">validateMACAddress</code>: Validates a MAC address.</li>
<li className='text-xl bg-white/50 w-fit list-none hover:bg-white p-2 rounded-md'><code className="text-green-600 mr-2 hover:bg-yellow-200 p-2 rounded-lg hover:text-black ">validateIBAN</code>: Validates an IBAN (International Bank Account Number).</li>
<li className='text-xl bg-white/50 w-fit list-none hover:bg-white p-2 rounded-md'><code className="text-green-600 mr-2 hover:bg-yellow-200 p-2 rounded-lg hover:text-black ">validateCVV</code>: Validates a credit card CVV (Card Verification Value) code.</li>
<li className='text-xl bg-white/50 w-fit list-none hover:bg-white p-2 rounded-md'><code className="text-green-600 mr-2 hover:bg-yellow-200 p-2 rounded-lg hover:text-black ">validateISBN</code>: Validates an ISBN (International Standard Book Number).</li>
<li className='text-xl bg-white/50 w-fit list-none hover:bg-white p-2 rounded-md'><code className="text-green-600 mr-2 hover:bg-yellow-200 p-2 rounded-lg hover:text-black ">validateUUID</code>: Validates a UUID (Universally Unique Identifier).</li>
<li className='text-xl bg-white/50 w-fit list-none hover:bg-white p-2 rounded-md'><code className="text-green-600 mr-2 hover:bg-yellow-200 p-2 rounded-lg hover:text-black ">validateSocialMediaUsername</code>: Validates a social media username.</li>

</div>  
</div>

  {/* <UsageExamples /> */}


    </main>
    </>
  )
}
