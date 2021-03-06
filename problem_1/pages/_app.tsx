import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'

function IDUN_SPA({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />
}

export default IDUN_SPA
