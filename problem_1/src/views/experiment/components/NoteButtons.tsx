import classNames from 'classnames'

const NoteButton = ({ note, isActive, ...rest }) => {
  const classes = isActive ? 'note note--active' : 'note'
  return (
    <button className={classes} {...rest}>
      {note}
    </button>
  )
}

type NoteColumn = {
  note: string
  isActive: boolean
}

type NoteButtonsProps = {
  notes: NoteColumn[]
  currentColumn: number
}

export default function NoteButtons(props: NoteButtonsProps): JSX.Element {
  return (
    <>
      {props.notes.map(({ note, isActive }, columnIndex) => (
        <div
          className={classNames('note-column', {
            'note-column--active': props.currentColumn === columnIndex
          })}
          key={columnIndex + 'column'}
        >
          {console.log(note)}
          <NoteButton note={note} isActive={isActive} key={columnIndex} />
        </div>
      ))}
    </>
  )
}
