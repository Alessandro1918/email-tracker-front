"use client"
import { useState } from "react"
import Image from 'next/image'

export default function Home() {

  const [ emailId, setEmailId ] = useState('')                //"1234"
  const [ emailRecipient, setEmailRecipient ] = useState('')  //"ale@gmail.com"
  const [ emailSubject, setEmailSubject ] = useState('')      //"Status Report - Week 42"

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
      <p>Email:</p>
      <div>
        <label >ID:</label>
        <input 
          className="text-black"
          type="text" 
          placeholder="Ex: 1234"
          value={emailId}
          onChange={event => setEmailId(event.target.value)}
        >
        </input>
      </div>

      <div>
        <label >Destinatário:</label>
        <input 
          className="text-black"
          type="text" 
          placeholder="Ex: ale@gmail.com"
          value={emailRecipient}
          onChange={event => setEmailRecipient(event.target.value)}
        >
        </input>
      </div>

      <div>
        <label >Assunto:</label>
        <input 
          className="text-black"
          type="text" 
          placeholder="Ex: Status Report - Week 42"
          value={emailSubject}
          onChange={event => setEmailSubject(event.target.value)}
        >
        </input>
      </div>

      <div className="items-center justify-between lg:flex">
        <p>{"Tracking pixel: ("}</p>
        <Image
          src="/vercel.svg"
          alt="Vercel Logo"
          className="dark:invert"
          width={100}
          height={24}
          priority
        />
        <p>{")"}</p>
      </div>
    </main>
  )
}
