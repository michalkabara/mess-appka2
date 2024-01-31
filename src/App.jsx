
import './App.css';

import Navbar from './components/Navbar';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { FeaturedGame } from './components/FeaturedGame';
import { Outlet } from 'react-router-dom';


function App() {
  return (
    <div className="App max-w-[1280px] m-auto bg-zinc-900">
    <header><Header/></header>
    <nav className='mb-3 mt-3'><Navbar/></nav>
    <div className='flex flex-row gap-4 mt-1'>
      <div className='
      p-2 w-[230px] text-left'>
        <Sidebar/>
      </div>
        <div className=' w-full bg-zinc-800 text-zinc-300 rounded-lg'>
          <Outlet/>
        </div>
        <div className='w-[400px] flex flex-col gap-3'>
            <FeaturedGame/>
            <div className='bg-slate-500 '>reklamy</div>
        </div>
      
    </div>
  </div>
  );
}

export default App;
