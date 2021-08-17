import Head from 'next/head'
import { useRouter } from 'next/router'

export default function Home(): JSX.Element {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>IDUN – Frontend Assessment</title>
        <meta
          name='description'
          content='This is the example frontend for the fullstack engineer assessment for IDUN Technologies. It demonstrates a possible implementation for the Oddball Experiment.'
        />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <section className='flex flex-row h-screen min-h-full'>
        <main className='flex flex-col items-center justify-center w-1/2 h-screen bg-white'>
          <div className='w-7/12'>
            <h1 className='mb-10 text-5xl font-black uppercase'>
              Oddball
              <br /> Experiment
            </h1>
            <p className='max-w-lg mb-5 text-justify'>
              {`In the auditory oddball paradigm you are exposed to a stream of
          repetitive tones (of the same frequency) where once in a while a
          different tone appears. Interestingly, the brain reacts unconsciously
          to the oddball after adapting to the tone sequence even when focusing
          on something else. `}
              <a
                href='https://en.wikipedia.org/wiki/Oddball_paradigm'
                target='_blank'
                rel='noreferrer'
                className='text-primary hover:text-hover'
              >
                Read more.
              </a>
            </p>
            <ul className='mb-10'>
              <li>
                <b>Duration:</b> 2 minutes
              </li>
              <li>
                <b>Prerequisites:</b> None
              </li>
            </ul>
            <button
              onClick={() => router.push('/experiment')}
              className='p-4 text-center text-white rounded-lg cursor-pointer w-52 bg-primary hover:bg-hover'
            >
              Start experiment
            </button>
          </div>
        </main>
        <aside className='w-1/2 h-screen bg-black bg-center bg-no-repeat bg-hero-image'></aside>
      </section>
    </>
  )
}
