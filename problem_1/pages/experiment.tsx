import Head from 'next/head'
import dynamic from 'next/dynamic'

const ExperimentView = dynamic(() => import('../src/views/experiment'), {
  ssr: false
})

export default function Home(): JSX.Element {
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
      <main>
        <ExperimentView />
      </main>
    </>
  )
}
