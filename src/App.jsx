import "./App.css";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { FeaturedGame } from "./components/FeaturedGame";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App m-auto bg-zinc-900">
      <header className="bg-zinc-800 flex flex-col items-center">
        <Header />
      </header>
      <nav className="mb-3 mt-3 flex flex-col w-full items-center">
        <Navbar />
      </nav>

      <div className="flex items-center flex-col">
        <div className="w-full flex flex-row gap-4 mt-1 max-w-[1280px]">
          <div className="p-2 w-[230px] text-left">
            <Sidebar />
          </div>
          <div className=" w-full bg-zinc-800 text-zinc-300 rounded-lg">
            <Outlet />
          </div>
          <div className="w-[400px] flex flex-col gap-3">
            <FeaturedGame />
            <div className="bg-slate-500 ">reklamy</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
