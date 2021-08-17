import { memo } from 'react'

export type SoundBlockProps = {
  note: []
  isActive: boolean
  isRandom: boolean
  notShowing: boolean
}

function SoundBlock(props: SoundBlockProps): JSX.Element {
  const STANDARD_STYLES = 'h-20 w-10 rounded-sm m-1'

  function getAccurateClasses(): string {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return props.note[1].isActive
      ? `${STANDARD_STYLES} bg-white`
      : `${STANDARD_STYLES} bg-primary`
  }

  function getRandomClasses(): string {
    return Math.random() > 0.8
      ? `${STANDARD_STYLES} bg-primary`
      : `${STANDARD_STYLES} bg-white`
  }

  return (
    <div
      className={
        props.isRandom
          ? getRandomClasses()
          : props.notShowing
          ? `${STANDARD_STYLES} bg-white`
          : getAccurateClasses()
      }
    />
  )
}

// Needs to be memoized due to eliminating unnecessary re-renders while the styles change
export default memo(SoundBlock)
