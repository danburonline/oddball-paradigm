import classNames from 'classnames'
import SoundBlock from './SoundBlock'
import type { SoundBlockProps } from './SoundBlock'
import Cross from '../../../components/Cross'

type SoundBlocksProps = {
  notes: SoundBlockProps[]
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
            <SoundBlock
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
