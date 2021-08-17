type TGenerateSoundGrid = {
  note: number
  isActive: boolean
}[]

export default function generateSoundGrid(
  gridCount: number,
  randomness: number,
  highTone: number,
  lowTone: number
): TGenerateSoundGrid[] {
  const soundData = []

  for (let i = 0; i < gridCount; i++) {
    const d = Math.random()
    const column: TGenerateSoundGrid = [
      { note: highTone, isActive: d > randomness ? true : false }
    ]
    column.push({
      note: lowTone,
      isActive: column[0].isActive == true ? false : true
    })
    soundData.push(column)
  }

  return soundData
}
