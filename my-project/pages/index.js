import Head from 'next/head'
import navigation_bar from '../components/navigation_bar'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <navigation_bar />

    </div>
  )
}
