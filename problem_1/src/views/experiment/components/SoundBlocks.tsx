import classNames from 'classnames'
import NoteButton from './NoteButton'
import type { NoteColumn } from './NoteButton'
import Cross from '../../../components/Cross'

type SoundBlocksProps = {
  notes: NoteColumn[]
  currentColumn: number
  isRandom?: boolean
  isNotShowing?: boolean
  isInvisible?: boolean
  isNotDone?: boolean
}

export default function SoundBlocks(props: SoundBlocksProps): JSX.Element {
  return (
    <>
      {props.isInvisible ? (
        <Cross />
      ) : props.isNotDone ? (
        props.notes.map((note, columnIndex) => (
          <div
            className={classNames('flex flex-col', {
              'bg-yellow-400 rounded-sm': props.currentColumn === columnIndex
            })}
            key={columnIndex + 'column'}
          >
            <NoteButton
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              note={note}
              key={columnIndex}
              isRandom={props.isRandom}
              notShowing={props.isNotShowing}
            />
          </div>
        ))
      ) : null}
    </>
  )
}
