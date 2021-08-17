import classNames from 'classnames'

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
      className={props.isRandom ? getRandomClasses() : getAccurateClasses()}
    ></div>
  )
}

type NoteColumn = {
  note: []
  isActive: boolean
  isRandom: boolean
}

type NoteButtonsProps = {
  notes: NoteColumn[]
  currentColumn: number
  isRandom?: boolean
  notShowing?: boolean
}

export default function NoteButtons(props: NoteButtonsProps): JSX.Element {
  return (
    <>
      {props.notes.map((note, columnIndex) => (
        <div
          className={classNames('note-column', {
            'note-column--active': props.currentColumn === columnIndex
          })}
          key={columnIndex + 'column'}
        >
          <NoteButton
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            note={note}
            key={columnIndex}
            isRandom={props.isRandom}
            notShowing={props.notShowing}
          />
        </div>
      ))}
    </>
  )
}
