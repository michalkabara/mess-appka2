import Navbar from './Navbar';
import Sidebar from './Sidebar'
import Header from './Header';
import { Outlet } from 'react-router-dom';


export const Layout = ({children}) => {
  return (
    <div className="App max-w-[1280px] m-auto">
    <header><Header/></header>
    <nav className='mb-3 mt-3'><Navbar/></nav>
    <div className='flex flex-row gap-4 mt-1'>
      <div className='
      p-2 w-[230px] text-left'>
        <Sidebar/>
      </div>
        <div className=' w-full bg-zinc-700 text-zinc-300 rounded-lg'>
            {children}
          <Outlet/>
        </div>
      <div className='bg-slate-500 w-[400px]'>reklamy</div>
    </div>
  </div>
  )
}
