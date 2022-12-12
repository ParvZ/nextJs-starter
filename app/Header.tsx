import React from 'react'
import { Bars2Icon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import NavLinks from './NavLinks'
import SearchBox from './SearchBox'

function Header() {
  return (
    <header>
        <div className='grid grid-cols-3 p-10 items-center'>
            <Bars2Icon className="h-6 w-6 cursor-pointer"/>
            <Link href={"/"} prefetch={false}>
                <h1 className='font-serif text-4xl text-center'>The Great News</h1>
            </Link>
            
            <div className='flex items-center justify-end'>
                {/* dark mode */}
                <button className='hidden md:inline bg-slate-900 text-white px-4 rounded-full py-2'>
                    Subscribe Now
                </button>
            </div>
        </div>

        <NavLinks />

        <SearchBox />
        
    </header>
  )
}

export default Header