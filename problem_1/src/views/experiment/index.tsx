import { useState, useEffect, useMemo } from 'react'
import { useRouter } from 'next/router'
import * as Tone from 'tone'

import SoundBlocks from './components/SoundBlocks'
import Completed from './components/Completed'
import Countdown from './components/Countdown'
import Confetti from '../../../src/components/Confetti'
import generateSoundGrid from './utils/generateSoundGrid'

export default function Experiment(): JSX.Element {
  const NOTE_BLOCKS = 30
  const EXPERIMENT_LENGTH = 1000 * 60 * 2 // 2 minutes
  const HIGH_TONE = 600 // Hz
  const LOW_TONE = 400 // Hz
  const RANDOMNESS = 0.85
  const ATTACK_DURATION = 0.06 // seconds
  const OCTAVE = 3

  const [isPlaying, setIsPlaying] = useState(false)
  const [currentColumn, setCurrentColumn] = useState(null)
  const [isRandom, setIsRandom] = useState(false)
  const [isNotShowing, setIsNotShowing] = useState(false)
  const [isInvisible, setIsInvisible] = useState(false)
  const [isCompleted, setIsCompleted] = useState(false)
  const [isNotDone, setIsNotDone] = useState(true)
  const [showCross, setShowCross] = useState(false)
  const synth = new Tone.PolySynth().toDestination()
  const router = useRouter()
  const [soundGrid] = useState(
    useMemo(
      () => generateSoundGrid(NOTE_BLOCKS, RANDOMNESS, HIGH_TONE, LOW_TONE),
      []
    )
  )

  const playSounds = async () => {
    const sounds = []

    soundGrid.map(column => {
      const gridNotes = []
      column.map(
        shouldPlay =>
          shouldPlay.isActive && gridNotes.push(shouldPlay.note + OCTAVE)
      )
      sounds.push(gridNotes)
    })

    await Tone.start()

    const Sequencer = new Tone.Sequence(
      (time, column) => {
        setCurrentColumn(column)
        synth.triggerAttackRelease(sounds[column], ATTACK_DURATION, time)
      },
      [...Array(NOTE_BLOCKS).keys()],
      1
    )

    if (isPlaying) {
      setIsPlaying(false)
      setCurrentColumn(null)

      Tone.Transport.stop()
      Sequencer.stop()
      Sequencer.clear()
      Sequencer.dispose()

      return
    }

    Sequencer.start()
    Tone.Transport.start()

    /* ! Timeouts that control the sequences of the experiment
      1. Display the correct highlighted sound objects in the first 30 seconds
      2. Play the same sound for 30 seconds again but show random highlighted sound objects
      3. Play the same sound for 30 seconds again but show no highlighted sound objects
      4. Play the same sound for 30 seconds again but show nothing but a cross in the center
      */
    setTimeout(() => {
      setIsRandom(true)
    }, 1000 * 30) // After 30 seconds of the experiment

    setTimeout(() => {
      setIsNotShowing(true)
      setIsRandom(false)
    }, 1000 * 60) // After 60 seconds of the experiment

    setTimeout(() => {
      setShowCross(true)
      setIsInvisible(true)
    }, 1000 * 90) // After 90 seconds of the experiment

    setTimeout(() => {
      setIsNotDone(false)
      setIsInvisible(false)
      Tone.Transport.stop()
      Sequencer.stop()
      Sequencer.clear()
      Sequencer.dispose()
    }, 1000 * 120) // After the experiment is completed
  }

  useEffect(() => {
    // TODO Find a better solution for a cleanup work
    router.pathname === '/experiment' ? playSounds() : null
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
          {showCross ? (
            <h2 className='text-white'>
              <b>Concentrate on the cross.</b>
            </h2>
          ) : (
            <h2 className='text-white'>
              <b>
                Follow the yellow sound indicator, sit still and concentrate.
              </b>
            </h2>
          )}
          <Countdown
            setIsCompleted={setIsCompleted}
            duration={EXPERIMENT_LENGTH}
          />
        </>
      )}
      <div className='flex h-auto'>
        <SoundBlocks
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          notes={soundGrid}
          currentColumn={currentColumn}
          isRandom={isRandom}
          isNotShowing={isNotShowing}
          isInvisible={isInvisible}
          isNotDone={isNotDone}
        />
      </div>
    </div>
  )
}
