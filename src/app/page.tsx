"use client"
import { useState } from "react"
import Image from 'next/image'

export default function Home() {

  const BACK_URL = process.env.NEXT_PUBLIC_BACK_URL || "http://localhost:4000"

  const [ emailId, setEmailId ] = useState('')                    //"1234"
  const [ emailRecipient, setEmailRecipient ] = useState('')      //"ale@gmail.com"
  const [ emailSubject, setEmailSubject ] = useState('')          //"Status Report - Week 42"
  const [ isPixelVisible, setIsPixelVisible ] = useState(false)   //Hide pixel everytime any input changes. Else, every character typed will trigger the backend

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
      <p>Email:</p>
      <div>
        <label>ID:</label>
        <input 
          className="text-black"
          type="text" 
          placeholder="Ex: 1234"
          value={emailId}
          onChange={event => {
            setIsPixelVisible(false)
            setEmailId(event.target.value)
          }}
        >
        </input>
      </div>

      <div>
        <label>Destinatário:</label>
        <input 
          className="text-black"
          type="text" 
          placeholder="Ex: ale@gmail.com"
          value={emailRecipient}
          onChange={event => {
            setIsPixelVisible(false)
            setEmailRecipient(event.target.value)
          }}
        >
        </input>
      </div>

      <div>
        <label>Assunto:</label>
        <input 
          className="text-black"
          type="text" 
          placeholder="Ex: Status Report - Week 42"
          value={emailSubject}
          onChange={event => {
            setIsPixelVisible(false)
            setEmailSubject(event.target.value)
          }}
        >
        </input>
      </div>

      {
        isPixelVisible
        ?
          <div className="items-center justify-between lg:flex">
            <p>{"Tracking pixel: ("}</p>
            <Image
              // className="dark:invert"
              // src="/vercel.svg"
              // src={`${emailId}`}
              src={`${BACK_URL}/track?id=${emailId}&recipient=${emailRecipient}&subject=${emailSubject}`}
              alt="Vercel Logo"
              width={2}
              height={2}
              priority
            />
            <p>{")"}</p>
          </div>
        :
          <button
            onClick={() => setIsPixelVisible(true)}
          >
            Visualizar pixel
          </button>
      }
    </main>
  )
}
