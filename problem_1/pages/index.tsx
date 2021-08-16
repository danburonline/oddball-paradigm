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
        <main className='w-1/2 h-screen'>
          <h1>Oddball Experiment</h1>
          <p>
            {`In the auditory oddball paradigm you are exposed to a stream of
          repetitive tones (of the same frequency) where once in a while a
          different tone appears. Interestingly, the brain reacts unconsciously
          to the oddball after adapting to the tone sequence even when focusing
          on something else. `}
            <a href='' target='_blank'>
              Read more.
            </a>
          </p>
          <ul>
            <li>
              <span>Duration:</span> 2 minutes
            </li>
            <li>
              <span>Prerequisites:</span> None
            </li>
          </ul>
          <div
            aria-roledescription='button'
            onClick={() => router.push('/experiment')}
          >
            Start experiment
          </div>
        </main>
        <aside
          id='aside-image'
          className='w-1/2 h-screen bg-black bg-center bg-no-repeat bg-hero-image'
        ></aside>
      </section>
    </>
  )
}
