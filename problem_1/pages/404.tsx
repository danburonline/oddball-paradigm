import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Page404(): null {
  const router = useRouter()

  useEffect(() => {
    router.push('/')
  }, [router])

  return null
}
