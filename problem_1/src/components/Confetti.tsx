import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'

export default function ConfettiComponent(): JSX.Element {
  const { width, height } = useWindowSize()
  return <Confetti width={width} height={height} recycle={false} />
}
