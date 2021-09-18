import Head from 'next/head';
import Navigation_bar from '../components/navigation_bar.js';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation_bar />

    </div>
  )
}
