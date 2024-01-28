import React from 'react'

const Header = () => {
  return (
    <div className='flex items-center justify-between py-3 px-5 bg-slate-700 text-white max-w-[1280px]'>
        <span>logo</span>
        <input type="text" placeholder='search'/>
        <button>Login</button>
    </div>
  )
}

export default Header