import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Feed from '../components/Feed'
import Sidebar from '../components/Sidebar'
import Widgets from '../components/Widgets'

const Home: NextPage = () => {
  return (
    <div className="lg:max-w-6xl mx-auto max-h-screen overflow-hidden">
      <Head>
        <title>Commpro</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <main className='grid grid-cols-9 col-span-2'>
          <Sidebar/>
          <Feed/>
          {/* Widgets */}
          <Widgets/>
        </main>
      
      
    </div>
  )
}

export default Home
