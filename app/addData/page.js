'use client'
import { useState } from "react"
import { addDataToFirebase } from "../firebase"

export default function Addata() {
  const [data, setData] = useState({
    id: '',
    namaMempelai: '',
    link: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await addDataToFirebase(data.id, data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="text-center">
      <h1 className="text-xl sm:text-3xl text-green-700 font-bold py-10">Buatkan User <br /> Halaman Share Link</h1>
      <input
        type="text"
        className="p-2 rounded-md outline-0 bg-white"
        placeholder="Id"
        name="id"
        value={data.id}
        onChange={handleChange}
      />
      <div className="w-[80%] sm:w-1/2 m-auto py-5">
        <p className="text-left italic ">Nama mempelai</p>
        <input
          type="text"
          className="bg-white outline-0 p-2 rounded-md w-full"
          placeholder="Masukkan Nama Pengantin"
          name="namaMempelai"
          value={data.namaMempelai}
          onChange={handleChange}
        />
      </div>
      <div className="w-[80%] sm:w-1/2 m-auto py-5">
        <p className="text-left italic ">Link Undangan</p>
        <input
          type="text"
          className="bg-white outline-0 p-2 rounded-md w-full"
          placeholder="Masukkan Link Undangan"
          name="link"
          value={data.link}
          onChange={handleChange}
        />
      </div>
      <button className="bg-green-500 p-2 text-white rounded-md w-20 mt-10">
        Apply
      </button>
    </form>
  )
}
