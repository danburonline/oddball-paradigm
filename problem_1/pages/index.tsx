import Head from 'next/head'
export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>IDUN – Frontend Assessment</title>
        <meta
          name='description'
          content='This is the example frontend for the fullstack engineer assessment for IDUN Technologies.'
        />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <section className='flex flex-col min-h-screen '>
        <main className='flex flex-col justify-center min-h-screen py-20'></main>
        <h1>Hello World</h1>
      </section>
    </>
  )
}
