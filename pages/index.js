import { getProviders, getSession, useSession } from 'next-auth/react';
import Head from 'next/head'
import Feed from '../components/Feed'
import Model from '../components/Model';
import NaveBar from '../components/Navebar';

export default function Home() {
  
  const { data: session } = useSession();
  // if (!session) return <SignIn providers={providers} />;
  
  return (
    <div className="scrollbar-hide h-screen overflow-y-scroll bg-gray-50 " >
      <Head>
        <title>hi❤️ {session?.user?.name}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header component */}
      <NaveBar  />
      {/* Feed component */}
      <Feed />
      {/* Model */}
      <Model />
      
    </div>
  )
}

