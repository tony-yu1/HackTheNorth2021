import Head from 'next/head';
import Navigation_bar from '../components/navigation_bar.js';

export default function Home() {
  return (
    <div >
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation_bar />

      <section>
        <div className="max-w-3xl mx-auto">
          

        </div>
      </section>

    </div>
  )
}
