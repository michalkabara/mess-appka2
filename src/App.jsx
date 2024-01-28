
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import {GamesResults} from './components/GamesResults';

function App() {
  return (
    <div className="App max-w-[1280px] m-auto">
      <header><Header/></header>
      <nav><Navbar/></nav>
      <div className='flex flex-row gap-4 mt-1'>
        <div className='bg-slate-600
        p-2 w-[230px] text-left'>
          <Sidebar/>
        </div>
        <div className='bg-slate-600 w-full'><GamesResults/></div>
        <div className='bg-slate-500 w-[400px]'>reklamy</div>
      </div>
    </div>
  );
}

export default App;
