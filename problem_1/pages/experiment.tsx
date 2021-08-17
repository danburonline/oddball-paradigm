import Head from 'next/head'
import dynamic from 'next/dynamic'
import { useState } from 'react'
import { FullScreen, useFullScreenHandle } from 'react-full-screen'

const ExperimentView = dynamic(() => import('../src/views/experiment'), {
  ssr: false
})

export default function Home(): JSX.Element {
  const [startExperiment, setStartExperiment] = useState(false)
  const handle = useFullScreenHandle()

  return (
    <>
      <Head>
        <title>IDUN – Oddball Experiment</title>
        <meta
          name='description'
          content='This is the example frontend for the fullstack engineer assessment for IDUN Technologies. It demonstrates a possible implementation for the Oddball Experiment.'
        />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <FullScreen handle={handle}>
        <main className='bg-black'>
          {startExperiment ? (
            <ExperimentView />
          ) : (
            <div className='flex flex-col items-center justify-center h-screen'>
              <h1 className='mb-6 text-center text-white'>
                <b>Put your IDUN Guardian earphones inside your head,</b>
                <br />
                sit straight and click the button when you&apos;re ready.
              </h1>
              <button
                className='p-4 text-center text-white rounded-lg cursor-pointer w-52 bg-primary hover:bg-hover'
                onClick={() => {
                  handle.enter()
                  setStartExperiment(true)
                }}
              >
                Start experiment
              </button>
            </div>
          )}
        </main>
      </FullScreen>
    </>
  )
}
