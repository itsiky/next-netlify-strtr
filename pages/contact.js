import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Link from 'next/link'

export default function Contact() {
  return (
    <div className="container">
      <Head>
        <title>Contact Us</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Contact Us" />
        <p className="description">
          Get started by editing <code>pages/contact.js</code>
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
