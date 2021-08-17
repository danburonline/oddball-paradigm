import { memo } from 'react'

export type SoundBlockProps = {
  note: []
  isActive: boolean
  isRandom: boolean
  notShowing: boolean
}

const SoundBlock = (props: SoundBlockProps): JSX.Element => {
  function getAccurateClasses(): string {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return !props.note[1].isActive
      ? 'h-20 w-10 rounded-sm m-1 bg-primary'
      : 'h-20 w-10 bg-white rounded-sm m-1 bg-white'
  }

  function getRandomClasses(): string {
    return Math.random() > 0.8
      ? 'h-20 w-10 rounded-sm m-1 bg-primary'
      : 'h-20 w-10 bg-white rounded-sm m-1 bg-white'
  }

  return (
    <div
      className={
        props.isRandom
          ? getRandomClasses()
          : props.notShowing
          ? 'h-20 w-10 bg-white rounded-sm m-1'
          : getAccurateClasses()
      }
    ></div>
  )
}

export default memo(SoundBlock)
