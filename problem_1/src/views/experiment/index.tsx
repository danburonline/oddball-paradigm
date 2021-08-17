import { useState, useEffect, useMemo } from 'react'
import * as Tone from 'tone'
import NoteButtons from './components/NoteButtons'

function GenerateGrid(columnsCount: number, randomness: number) {
  const grid = []
  for (let i = 0; i < columnsCount; i++) {
    const d = Math.random()
    const column = [{ note: 600, isActive: d > randomness ? true : false }]
    column.push({
      note: 400,
      isActive: column[0].isActive == true ? false : true
    })
    grid.push(column)
  }
  return grid
}

export default function Experiment(): JSX.Element {
  const [grid] = useState(useMemo(() => GenerateGrid(30, 0.9), [30, 0.9]))
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentColumn, setCurrentColumn] = useState(null)
  const synth = new Tone.PolySynth().toDestination()

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

    // stop the sounds after after 30 seconds
    setTimeout(async () => {
      await Tone.Transport.stop()
      await Sequencer.stop()
      await Sequencer.clear()
      await Sequencer.dispose()
    }, 30000)
  }

  useEffect(() => {
    PlayMusic()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className='App'>
      <div className='note-wrapper'>
        {console.log('does this render too?')}
        <NoteButtons notes={grid} currentColumn={currentColumn} />
      </div>
    </div>
  )
}
