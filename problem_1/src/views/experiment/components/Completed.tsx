import { useRouter } from 'next/router'
import Image from 'next/image'

export default function Countdown(): JSX.Element {
  const router = useRouter()
  return (
    <>
      <main className='flex flex-col justify-center p-5 align-middle bg-white rounded-lg w-96 h-96'>
        <Image
          alt='Emoji of a hand'
          src='/svgs/hands-emoji.svg'
          height='60px'
          width='60px'
        />
        <h2 className='mt-6 text-2xl font-bold'>Experiment complete</h2>
        <h2 className='text-2xl'>Good job!</h2>
        <div className='w-full mt-8'>
          <button
            className='px-10 py-3 text-white rounded bg-primary'
            onClick={() => router.replace('/')}
          >
            Go back home
          </button>
          <button
            className='w-12 h-full ml-2 text-white rounded cursor-not-allowed w-90 bg-primary'
            onClick={() =>
              // TODO Create the functionality to download the experiment data
              alert("Functionality for downloading data hasn't been added yet")
            }
          >
            <Image
              alt='Download icon'
              src='/svgs/icons/cloud_download-icon.svg'
              width='25px'
              height='15px'
            />
          </button>
        </div>
      </main>
    </>
  )
}
