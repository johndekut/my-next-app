async function getTicket(id) {
  console.log("fetching ticket:", id);

  const res = await fetch(`http://localhost:4000/tickets/${id}`, { cache: "no-store" });

  if (!res.ok) {
    const text = await res.text();
    console.error("Fetch failed:", text);
    throw new Error("Ticket not found");
  }

  return res.json();
}

export default async function TicketDetails(props) {
  // 👇 Explicitly await params to unwrap the Promise
  const { id } = await props.params;
  console.log("params received:", { id });

  const ticket = await getTicket(id);

  return (
    <main>
      <nav>
        <h2>Ticket Details</h2>
      </nav>
      <div className="card">
        <h3>{ticket.title}</h3>
        <small>Created by {ticket.user_email}</small>
        <p>{ticket.body}</p>
        <div className={`pill ${ticket.priority}`}>
          {ticket.priority} priority
        </div>
      </div>
    </main>
  );
}
