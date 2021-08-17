import classNames from 'classnames'

const NoteButton = ({ note, ...rest }) => {
  const classes = !note[1].isActive ? 'note note--active' : 'note'
  return <div className={classes} {...rest}></div>
}

type NoteColumn = {
  note: string
}

type NoteButtonsProps = {
  notes: NoteColumn[]
  currentColumn: number
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
          {/* {console.log(note)} */}
          <NoteButton note={note} key={columnIndex} />
        </div>
      ))}
    </>
  )
}
