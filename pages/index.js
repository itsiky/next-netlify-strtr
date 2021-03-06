import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Itsik!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my apps!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
        <p className="additions">
          this is a new line added by me <addition>pages/test.js</addition>
        </p>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About Us</a>
        </Link>
        <Link href="/contact">
          <a>Contact Us</a>
        </Link>
      </main>

      <Footer />
    </div>
  )
}
