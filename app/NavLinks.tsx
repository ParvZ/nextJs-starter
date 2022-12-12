'use client'
import React from 'react'
import { categories } from '../constants'
import NavLink from './NavLink'
import { usePathname } from 'next/navigation'

function NavLinks() {
    
    const pathName = usePathname()

   const isActive = (path: string)=> {
    return pathName?.split('/').pop() === path
   }

  return (
    <nav className='flex justify-center'>
        {categories.map( category =>  (
            <NavLink key={category} category={category} isActive={isActive(category)}/>
        ))}
    </nav>
  )
}

export default NavLinks