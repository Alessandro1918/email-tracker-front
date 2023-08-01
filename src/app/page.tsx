"use client"
import { useState } from "react"
// import Image from 'next/image'

export default function Home() {

  const BACK_URL = process.env.NEXT_PUBLIC_BACK_URL || "http://localhost:4000"

  const [ emailId, setEmailId ] = useState('')                    //"1234"
  const [ emailRecipient, setEmailRecipient ] = useState('')      //"ale@gmail.com"
  const [ emailSubject, setEmailSubject ] = useState('')          //"Status Report - Week 42"
  const [ isPixelVisible, setIsPixelVisible ] = useState(false)   //Hide pixel everytime any input changes. Else, every character typed will trigger the backend

  return (
    <main className="flex flex-col items-center justify-between p-24 space-y-4">
      
      <p>Email:</p>
      <div>
        <label>ID:</label>
        <input 
          className="text-black w-24 ml-1 pl-1"
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
          className="text-black w-56 ml-1 pl-1"
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
          className="text-black w-64 ml-1 pl-1"
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
            {/* <Image */}
            <img
              // className="dark:invert"
              className="m-1"
              // src="/vercel.svg"
              // src={`${emailId}`}
              src={`${BACK_URL}/track?id=${emailId}&recipient=${emailRecipient}&subject=${emailSubject}`}
              alt="Vercel Logo"
              width={2}
              height={2}
              // priority
            />
            <p>{")"}</p>
          </div>
        :
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => setIsPixelVisible(true)}
          >
            Visualizar pixel
          </button>
      }
    </main>
  )
}
