import Head from 'node_modules/next/head'
import Image from 'node_modules/next/image'
import Link from 'node_modules/next/link'
import '../styles/globals.css'

function Gazeto({ Component, pageProps }): JSX.Element {
  return (
    <>
      <Head>
        <title>Gazeto</title>
        <meta name="description" content="Gazeto" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container">
        <Component {...pageProps} />
      </main>

      <footer>
        <Link href="https://theguardian.com">
          <a target="_blank">
            <Image
              src="/poweredbyguardian.png"
              height="30"
              width="100"
              alt="Powered by The Guardian"
            />
          </a>
        </Link>
        <div>
          <br />
          This site&apos;s content is provided by{' '}
          <Link href="https://open-platform.theguardian.com/">
            <a target="_blank">The Guardian Open Platform.</a>
          </Link>{' '}
          This site is not affiliated with The Guardian which has the copyright
          to all the articles content. The terms of use to The Guardian Open
          Platform can be read{' '}
          <Link href="https://www.theguardian.com/open-platform/terms-and-conditions">
            <a target="_blank">here</a>
          </Link>
          .<br />
          All the content provided is for exclusive personal, non-commercial
          use.
        </div>
      </footer>
    </>
  )
}

export default Gazeto