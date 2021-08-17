import { useState, useEffect, useMemo } from 'react'
import * as Tone from 'tone'
import NoteButtons from './components/NoteButtons'
import Completed from './components/Completed'
import ExperimentMeta from './components/Countdown'
import Confetti from '../../../src/components/Confetti'
import { useRouter } from 'next/router'

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
  const [grid] = useState(useMemo(() => GenerateGrid(30, 0.85), []))
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentColumn, setCurrentColumn] = useState(null)
  const [isRandom, setIsRandom] = useState(false)
  const [notShowing, setNotShowing] = useState(false)
  const [isInvisible, setIsInvisible] = useState(false)
  const [isCompleted, setIsCompleted] = useState(false)
  const [isNotDone, setIsNotDone] = useState(true)
  const [showCross, setShowCross] = useState(false)
  const synth = new Tone.PolySynth().toDestination()
  const router = useRouter()

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

    await Sequencer.start()
    await Tone.Transport.start()

    setTimeout(async () => {
      setIsRandom(true)
    }, 1000 * 30)

    setTimeout(async () => {
      setNotShowing(true)
      setIsRandom(false)
    }, 1000 * 60)

    setTimeout(async () => {
      setShowCross(true)
      setIsInvisible(true)
    }, 1000 * 90)

    setTimeout(async () => {
      setIsNotDone(false)
      setIsInvisible(false)
      await Tone.Transport.stop()
      await Sequencer.stop()
      await Sequencer.clear()
      await Sequencer.dispose()
    }, 1000 * 120)
  }

  useEffect(() => {
    // TODO Find a better solution for a cleanup work
    router.pathname === '/experiment' ? PlayMusic() : null
    return () => {
      Tone.Transport.stop()
    }
  }, [router])

  return (
    <div className='flex flex-col items-center justify-center w-full h-screen text-center bg-black'>
      {isCompleted ? (
        <>
          <Completed />
          <Confetti />
        </>
      ) : (
        <>
          {!showCross ? (
            <h2 className='text-white'>
              <b>
                Follow the yellow sound indicator, sit still and concentrate.
              </b>
            </h2>
          ) : (
            <h2 className='text-white'>
              <b>Concentrate on the cross.</b>
            </h2>
          )}
          <ExperimentMeta setIsCompleted={setIsCompleted} />
        </>
      )}
      <div className='flex h-auto'>
        <NoteButtons
          notes={grid}
          currentColumn={currentColumn}
          isRandom={isRandom}
          notShowing={notShowing}
          isInvisible={isInvisible}
          isNotDone={isNotDone}
        />
      </div>
    </div>
  )
}
