import React from 'react'
import Countdown from 'react-countdown'

type ExperimentMetaProps = {
  // eslint-disable-next-line no-unused-vars
  setIsCompleted: (state: boolean) => void
}

function ExperimentMeta(props: ExperimentMetaProps): JSX.Element {
  return (
    <>
      <div className='mb-20 text-white'>
        <h3>
          {`Time remaining `}
          <Countdown
            date={Date.now() + 1000 * 60 * 2}
            onComplete={() => props.setIsCompleted(true)}
          />
        </h3>
      </div>
    </>
  )
}

export default React.memo(ExperimentMeta)
