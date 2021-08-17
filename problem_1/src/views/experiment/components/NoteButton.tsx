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
    return !props.note[1].isActive
      ? 'h-20 w-10 rounded-sm m-1 cursor-pointer border-2 border-indigo-600 bg-red'
      : 'h-20 w-10 bg-white rounded-sm m-1 cursor-pointer border-2 border-indigo-600'
  }

  function getRandomClasses(): string {
    return Math.random() > 0.8
      ? 'h-20 w-10 rounded-sm m-1 cursor-pointer border-2 border-indigo-600 bg-red'
      : 'h-20 w-10 bg-white rounded-sm m-1 cursor-pointer border-2 border-indigo-600'
  }

  return (
    <div
      className={
        props.isRandom
          ? getRandomClasses()
          : props.notShowing
          ? 'h-20 w-10 bg-white rounded-sm m-1 cursor-pointer border-2 border-indigo-600'
          : getAccurateClasses()
      }
    ></div>
  )
}

export default React.memo(NoteButton)
