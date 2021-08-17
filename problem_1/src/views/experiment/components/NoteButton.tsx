import React from 'react'

export type NoteColumn = {
  note: []
  isActive: boolean
  isRandom: boolean
  notShowing: boolean
}

const NoteButton = (props: NoteColumn): JSX.Element => {
  function getAccurateClasses(): string {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return !props.note[1].isActive ? 'note note--active' : 'note'
  }

  function getRandomClasses(): string {
    return Math.random() > 0.8 ? 'note note--active' : 'note'
  }

  return (
    <div
      className={
        props.isRandom
          ? getRandomClasses()
          : props.notShowing
          ? 'note'
          : getAccurateClasses()
      }
    ></div>
  )
}

export default React.memo(NoteButton)
