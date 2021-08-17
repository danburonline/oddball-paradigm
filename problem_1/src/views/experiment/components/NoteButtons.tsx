import classNames from 'classnames'
import NoteButton from './NoteButton'
import type { NoteColumn } from './NoteButton'
import Cross from '../../../components/Cross'

type NoteButtonsProps = {
  notes: NoteColumn[]
  currentColumn: number
  isRandom?: boolean
  notShowing?: boolean
  isInvisible?: boolean
}

export default function NoteButtons(props: NoteButtonsProps): JSX.Element {
  return (
    <>
      {props.isInvisible ? (
        <Cross />
      ) : (
        props.notes.map((note, columnIndex) => (
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
        ))
      )}
    </>
  )
}
