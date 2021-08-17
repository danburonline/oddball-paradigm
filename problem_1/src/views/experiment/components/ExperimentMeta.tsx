import React from 'react'
import Countdown from 'react-countdown'

type ExperimentMetaProps = {
  // eslint-disable-next-line no-unused-vars
  setIsCompleted: (state: boolean) => void
}

function ExperimentMeta(props: ExperimentMetaProps): JSX.Element {
  return (
    <div className='mb-20'>
      <h2 className=''>
        Follow the active sound indicator, sit still and concentrate
      </h2>
      <h3>
        <b>Time remaining</b>{' '}
        <Countdown
          date={Date.now() + 1000 * 60 * 2}
          onComplete={() => props.setIsCompleted(true)}
        />
      </h3>
    </div>
  )
}

export default React.memo(ExperimentMeta)
