import Head from 'next/head'
import Feed from '../components/Feed'
import NaveBar from '../components/Navebar'

export default function Home() {
  return (
    <div className="scrollbar-hide h-screen overflow-y-scroll " >
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header component */}
      <NaveBar />
      {/* Feed component */}
      <Feed/>
    </div>
  )
}
