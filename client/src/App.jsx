import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { logo } from './assets';

import { Home, CreatePost } from './pages';



const App = () => {
  return (
    <BrowserRouter>
      <header className='w-full flex justify-between items-center bg-slate-500
      sm:px-8 px-4 py-4 border-b border-b-[orange]'>
        <Link to='/'>
          <img src={logo} alt="nice logo :)" className='w-28 object-contain' />
          <h1 className='font-bold'>How?</h1>
        </Link>
        <Link to='/create-post' className='font-inter font-medium 
        bg-[crimson] text-white px-4 py-2 rounded-md'>
          Create!
        </Link>
      </header>
        
      <main className='sm:p-8 px-4 py-8 w-full 
      bg-[cadetblue] min-h-[calc(100vh-73px)]'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create-post' element={<CreatePost />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App