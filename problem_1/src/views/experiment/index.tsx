import { useState, useEffect } from 'react'
import * as Tone from 'tone'
import classNames from 'classnames'

function GenerateGrid() {
  const grid = []
  for (let i = 0; i < 30; i++) {
    const column = [
      { note: 500, isActive: false },
      { note: 200, isActive: true }
    ]
    grid.push(column)
  }
  return grid
}

export default function Experiment(): JSX.Element {
  const [grid, setGrid] = useState(GenerateGrid())
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentColumn, setCurrentColumn] = useState(null)
  const synth = new Tone.PolySynth().toDestination()

  function handleNoteClick(clickedColumn, clickedNote) {
    const updatedGrid = grid.map((column, columnIndex) =>
      column.map((cell, cellIndex) => {
        const cellCopy = cell

        if (columnIndex === clickedColumn && cellIndex === clickedNote) {
          cellCopy.isActive = !cell.isActive
        }

        return cellCopy
      })
    )

    setGrid(updatedGrid)
  }

  const PlayMusic = async () => {
    const music = []

    grid.map(column => {
      const columnNotes = []
      column.map(
        shouldPlay =>
          shouldPlay.isActive && columnNotes.push(shouldPlay.note + 3)
      )
      music.push(columnNotes)
    })

    await Tone.start()

    const Sequencer = new Tone.Sequence(
      (time, column) => {
        setCurrentColumn(column)
        synth.triggerAttackRelease(music[column], 0.06, time)
      },
      [...Array(30).keys()],
      1
    )

    if (isPlaying) {
      setIsPlaying(false)
      setCurrentColumn(null)

      await Tone.Transport.stop()
      await Sequencer.stop()
      await Sequencer.clear()
      await Sequencer.dispose()

      return
    }
    setIsPlaying(true)
    await Sequencer.start()
    await Tone.Transport.start()
  }

  useEffect(() => {
    PlayMusic()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className='App'>
      <div className='note-wrapper'>
        {grid.map((column, columnIndex) => (
          <div
            className={classNames('note-column', {
              'note-column--active': currentColumn === columnIndex
            })}
            key={columnIndex + 'column'}
          >
            {column.map(({ note, isActive }, noteIndex) => (
              <NoteButton
                note={note}
                isActive={isActive}
                onClick={() => handleNoteClick(columnIndex, noteIndex)}
                key={note + columnIndex}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

const NoteButton = ({ note, isActive, ...rest }) => {
  const classes = isActive ? 'note note--active' : 'note'
  return (
    <button className={classes} {...rest}>
      {note}
    </button>
  )
}
