import React from "react"
import { Button } from "@mui/material"
import { IpfsButton } from "./ipfs-button"

function NavBar() {
	return (
		<nav className='container flex items-center px-4 pt-6 sm:pt-12 mt-0 mb-12 sm:mb-24'>
        <ul className='flex flex-1 justify-left items-center gap-10'>
          <li>
            <Button variant='contained' href='https://github.com/TechTheAwesome/ipfs-adventure'>Github</Button>
          </li>
		  <li>
			  <Button variant='outlined' onClick={()=> alert('hi')}>Hi</Button>
		  </li>
        </ul>
        <span className='text-slate-300 pr-4'>
          This site is hosted on IPFS
        </span>
        <IpfsButton />
      </nav>
	)
}

export default NavBar;