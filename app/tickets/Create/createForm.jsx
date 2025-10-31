"use client" //tells next js that this is a client component and needs hydrating in the browser with some js
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function CreateForm() {

  const router = useRouter();
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [priority, setPriority] = useState('low') //low as def
  const [isLoading, setIsLoading] = useState(false)


const handleSubmit= async (e) =>{
  e.preventDefault()
  setIsLoading(true)

  const ticket = {
    title, body, priority, user_email: "tyresejonesog9@gmail.com"
  }

  const res = await fetch("http://localhost:4000/tickets", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(ticket)
  })

  if(res.status === 201){
    router.refresh()
    router.push('/tickets')
  }
}


  return (
    <form onSubmit={handleSubmit} className="w-1/2">
      <label>
        <span>Title:</span>
        <input
          required
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </label>
      <span>Body:</span>
      <textarea
        required
        onChange={(e) => setBody(e.target.value)}
        value={body}
      />

      <label >
        <span>Priority:</span>
        <select
          onChange={(e) => setPriority(e.target.value)}
          value={priority}
        >
          <option value="low">low Priority</option>
          <option value="medium">medium priority</option>
          <option value="high">High priority</option>

        </select>
      </label>
      <button
      className="btn-primary"
      disabled = {isLoading}
      >
        {isLoading  && <span>Adding...</span>}
        {!isLoading && <span>Add ticket</span>}

      </button>
    </form>
  )
}
