import Head from 'next/head'
import NaveBar from '../components/Navebar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NaveBar/>
    </div>
  )
}
