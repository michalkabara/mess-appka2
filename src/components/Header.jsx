import React from 'react'

const Header = () => {
  return (
    <div className='flex items-center justify-between py-3 px-5 bg-zinc-900 text-white max-w-[1280px]'>
        <span>logo</span>
        <input type="text" placeholder='search' className='border px-2 py-1 rounded-md border-l-neutral-400'/>
        <button>Login</button>
    </div>
  )
}

export default Header