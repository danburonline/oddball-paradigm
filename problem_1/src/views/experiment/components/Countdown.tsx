import { Dispatch, SetStateAction, memo } from 'react'
import Countdown from 'react-countdown'

type CountdownComponentProps = {
  setIsCompleted: Dispatch<SetStateAction<boolean>>
  duration: number
}

function CountdownComponent(props: CountdownComponentProps): JSX.Element {
  return (
    <>
      <div className='mb-20 text-white'>
        <h3>
          {`Time remaining `}
          <Countdown
            date={Date.now() + props.duration}
            onComplete={() => props.setIsCompleted(true)}
          />
        </h3>
      </div>
    </>
  )
}

// Needs to be memoized due to eliminating unnecessary re-renders while counting down
export default memo(CountdownComponent)
