'use client'

import { useRouter } from 'next/navigation'
import { FormEvent, useState } from 'react'

function SearchBox() {

    const [input, setInput] = useState('')
    const router = useRouter()

    const handleSearch = (e: FormEvent<HTMLFormElement>)=> {
        e.preventDefault()
        if(!input) return;

        router.push(`/search?term=${input}`)
    }

  return (
    <form className='max-w-6xl flex justify-between px-5 mx-auto' onSubmit={handleSearch}>
        <input 
            value={input}
            onChange={(e)=> setInput(e.target.value)}
            type="text" 
            className='flex-1 placeholder-gray-500 outline-none h-14 rounded-sm' 
            placeholder='Search topics'
        />
        <button 
            type='submit'
            disabled= {!input}
            className = "disabled:text-gray-400"
        > Seach </button>
    </form>
  )
}

export default SearchBox