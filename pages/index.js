import { getProviders, getSession, useSession } from 'next-auth/react';
import Head from 'next/head'
import Feed from '../components/Feed'
import NaveBar from '../components/Navebar'
import SignIn from '../components/SignIn';

export default function Home({ providers }) {
  
  const { data: session } = useSession();
  if (!session) return <SignIn providers={providers} />;
  
  return (
    <div className="scrollbar-hide h-screen overflow-y-scroll bg-gray-50 " >
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

export async function getServerSideProps(context) {
    const providers = await getProviders();
    const session = await getSession(context);

    return {
      props: {
        providers,
        session
      },
    };
}