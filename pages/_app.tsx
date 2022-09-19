import Header from 'components/Header/Header'
import Head from 'node_modules/next/head'
import Image from 'node_modules/next/image'
import Link from 'node_modules/next/link'
import FadeIn from 'node_modules/react-fade-in/lib/FadeIn'
import {
  ToastContainer,
  toast
} from 'node_modules/react-toastify/dist/react-toastify'
import 'node_modules/react-toastify/dist/ReactToastify.css'
import '../styles/globals.css'

function Gazeto({ Component, pageProps }): JSX.Element {
  return (
    <>
      <FadeIn>
        <Head>
          <title>Gazeto</title>
          <meta name="description" content="Gazeto" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header />

        <main className="container">
          <ToastContainer />
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
          <br />
          <br />
          This site&apos;s content is provided by{' '}
          <Link href="https://open-platform.theguardian.com/">
            <a target="_blank">The Guardian Open Platform.</a>
          </Link>{' '}
          This site is not affiliated with <i>Guardian News & Media Limited</i>{' '}
          which has the copyright to all the articles&apos; content. The terms
          of use to The Guardian Open Platform can be read{' '}
          <Link href="https://www.theguardian.com/open-platform/terms-and-conditions">
            <a target="_blank">here</a>
          </Link>
          .<br />
          <br />
          The Gazeto is a free, open source project, licensed under the{' '}
          <Link href="https://opensource.org/licenses/MIT">
            <a target="_blank">MIT License</a>
          </Link>
          . Read more about it{' '}
          <Link href="https://github.com/vascomfnunes/gazeto">
            <a target="_blank">here</a>
          </Link>
          .<br />
          <br />
          <strong>
            All the data provided by The Guardian Open Platform is for exclusive
            personal, non-commercial use.
          </strong>
        </footer>
      </FadeIn>
    </>
  )
}

export default Gazeto
