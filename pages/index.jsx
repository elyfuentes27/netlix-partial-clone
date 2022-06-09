import Head from 'next/head'
// import { signIn, signOut, useSession } from 'next-auth/client'

export default function Home() {
  // const [session, loading] = useSession()

  return (
    <div
      className="flex min-h-screen flex-col items-center justify-center bg-black"
      style={{
        backgroundImage: `linear-gradient(rgb(0 0 0 / 60%), rgb(0 0 0 / 60%)), url(/hero-bg.jpg)`,
      }}
    >
      <Head>
        <title>Videos Head</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center ">
        <h1 className="max-w-lg text-5xl font-bold text-white">
          Unlimeted movies, TV shows, and more.
        </h1>
        <h2 className="mt-4 mb-8 text-2xl text-white">
          Watch anywhere, cancel anytime.
        </h2>
        <p className="text-white">
          Ready to watch? Enter your email to create or restart your membership
        </p>
        <div className="flex">
          <input placeholder="Email address" className="bg-white p-4" />
          <button className="bg-[#e50914] px-8 text-xl text-white">
            Get Started
          </button>
        </div>
      </main>
    </div>
  )
}
