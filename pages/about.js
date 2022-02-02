import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Link from 'next/link'

export default function About() {
  return (
    <div className="container">
      <Head>
        <title>About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="About Us" />
        <p className="description">
          Get started by editing <code>pages/about.js</code>
        </p>
        <p className="additions">
          this is a new line added by me <addition>pages/about.js</addition>
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
