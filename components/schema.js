import Script from "next/script";

const Schema = () => {
  return (
    <>
    {/* Structured Data / Schema.org */}
    <Script
        id="schema"
        strategy="afterInteractive"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `
            {
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "MaxValid",
              "description": "MaxValid is a powerful npm package for validating various types of data.",
              "url": "https://maxvalid.js.org/",
              "author": {
                "@type": "Person",
                "name": "Monowar Hussain",
                "sameAs": "https://linkedin.com/in/techmonowar"
              },
              "applicationCategory": "Library",
              "operatingSystem": "Platform Independent",
              "softwareVersion": "1.0.0",
              "applicationSuite": "MaxValid",
              "downloadUrl": "https://www.npmjs.com/package/maxvalid",
              "keywords": "npm package, validation, data validation, form validation",
              "screenshot": "https://maxvalid.js.org/screenshot.png",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://maxvalid.js.org/"
              }
              "sameAs": "https://github.com/techmonowar/maxvalid"
            }
          `,
        }}
      />
    
    </>
  )
}

export default Schema;
