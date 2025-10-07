"use client"
import { useEffect, useState } from "react"
import { useSession } from "next-auth/react"

export default function TextHome() {
  const { data: session } = useSession()
  const [date, setDate] = useState("")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const today = new Date().toLocaleDateString("pt-BR", {
      weekday: "long",
      day: "2-digit",
      month: "long"
    })
    setDate(today)
  }, [])

  if (!mounted) return null

  return (
    <>
      {session?.user ? (
        <>
          <h2 className="text-xl font-bold">Olá, {session.user.name}</h2>
          <p>{date}</p>
        </>
      ) : (
        <p>Você não está logado.</p>
      )}
    </>
  )
}
