import Link from "next/link"

export default function NotFound() {
  return (
    <main className="text-center">
      <h2 className="text-3xl">Ooops! Nothing here...</h2>
      <p>kindly navigate to our dashboard and see the available tickets.</p>
      <p>
        Go back to the <Link href="/tickets">Tickets</Link>.
      </p>
    </main>
  )
}
