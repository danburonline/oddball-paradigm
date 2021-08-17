import Head from 'next/head'
import dynamic from 'next/dynamic'
import Countdown from 'react-countdown'
import { useState } from 'react'
import Completed from '../src/views/experiment/components/Completed'

const ExperimentView = dynamic(() => import('../src/views/experiment'), {
  ssr: false
})

export default function Home(): JSX.Element {
  const [isCompleted, setIsCompleted] = useState(false)

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
      <main style={{ backgroundColor: 'lightgrey' }}>
        <h3>
          <b>Time remaining</b>
        </h3>
        <Countdown
          date={Date.now() + 1000 * 60 * 2}
          onComplete={() => setIsCompleted(true)}
        />
        {isCompleted && <Completed />}
        <ExperimentView />
      </main>
    </>
  )
}
