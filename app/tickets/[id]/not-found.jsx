import Link from "next/link"

export default function Notfound() {
  return (
    <main className="">
      <h2 className="3xl">kindly confirm the ID</h2>
      <p>Ooops! not our faulr, the Id entered is not available</p>

      <p>Go back to the <Link href="/tickets">Tickets</Link> to confirm</p>

    </main>
  )
}
