import Head from 'next/head'
import Features from '../components/Features'
import Hero from '../components/Hero'
import Services from '../components/Services'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&family=Mulish:wght@700&family=Poppins:wght@600;700;800;900&display=swap" rel="stylesheet" /> 
      </Head>

      <main>
        <Hero />
        <Services />
        <Features />
      </main>

    </div>
  )
}
