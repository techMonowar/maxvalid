import Header from '../../components/Header'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Analytics from '../../components/analytics'
import Schema from '../../components/schema'
import UsageExamples from '../../components/UsageExamples'
import GoogleTagManagerNoScript from '../../components/GoogleTagNoScript'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Header />
    <Analytics />
    <Schema />
  <GoogleTagManagerNoScript />

   

    <main className="flex w-screen min-h-screen flex-col items-center justify-between lg:p-24 pt-20 p-4">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0  flex  w-full overflow-x-hidden justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-400 dark:bg-zinc-400/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-300/30">
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


  <UsageExamples />


    </main>
    </>
  )
}
