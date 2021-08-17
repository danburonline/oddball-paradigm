import { useRouter } from 'next/router'

export default function Countdown(): JSX.Element {
  const router = useRouter()
  return (
    <>
      <main className='p-5 bg-white rounded w-72'>
        <h1>Experiment complete. Good job!</h1>
        <button onClick={() => router.push('/')}>Go back home</button>
        <button
          onClick={() =>
            // TODO Create the functionality to download the experiment data
            alert("Functionality for downloading data hasn't been added yet")
          }
        >
          Download data
        </button>
      </main>
    </>
  )
}
