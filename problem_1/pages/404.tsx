import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Page404(): void {
  const router = useRouter()

  useEffect(() => {
    // Simply re-route to the home page
    router.push('/')
  }, [router])

  return null
}
