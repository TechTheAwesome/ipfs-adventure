import React from 'react'
import { createRoot } from 'react-dom/client'
import { IpfsButton } from './components/ipfs-button'
import './index.css'

const container = document.getElementById('root');
const root = createRoot(container!);

export async function Start() {

  root.render(
    <React.StrictMode>
      <nav className='container flex items-center px-4 pt-6 sm:pt-12 mt-0'>
        <ul className='flex flex-1 justify-center items-center gap-10 mb-12 sm:mb-24'>
          <li className='cursor-pointer bg-red-500 dark:bg-red-700 dark:text-slate-200 px-8 py-2 rounded-lg' onClick={() => alert('hi')}>Hi</li>
          <li className='cursor-pointer bg-red-500 dark:bg-red-700 dark:text-slate-200 px-8 py-2 rounded-lg'>Hi</li>
          <li className='cursor-pointer bg-red-500 dark:bg-red-700 dark:text-slate-200 px-8 py-2 rounded-lg'>Hi</li>
          <li className='cursor-pointer bg-red-500 dark:bg-red-700 dark:text-slate-200 px-8 py-2 rounded-lg'>Hi</li>
          <IpfsButton/>
        </ul>
      </nav>
      <div className='flex flex-1 justify-center items-center'>
        <h1 className='text-4xl sm:text-6xl px-8 sm:px-12 text-center max-w-2xl'>
          <span className=' text-red-700 dark:text-red-500'>
            Hi, I&apos;m Tech.
          </span>
          <br />
          <span className=' text-slate-700 dark:text-slate-500'>
            I explore exciting web technologies
          </span>
          </h1>
      </div>
    </React.StrictMode>
  )
}
Start().catch((error) => {
  console.log('Init failed:', error)
})
