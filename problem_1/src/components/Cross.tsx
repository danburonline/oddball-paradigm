import Image from 'next/image'

export default function CrossComponent(): JSX.Element {
  return (
    <Image
      alt='Cross icon: x'
      src='/svgs/cross.svg'
      width='40px'
      height='40px'
    />
  )
}
