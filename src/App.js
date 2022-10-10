import { useState } from 'react';
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import LogIn from './components/LogIn/LogIn';
import RegistrationPage from './RegistrationPage/RegistrationPage';

function App() {




  const [mode, setMode] = useState(!JSON.parse(localStorage.getItem('Mode')));


  const changeMode = (mode) => {

    const handleMode = () => {
      setMode(!mode);
      localStorage.setItem('Mode', mode);
    }
    if (mode) {
      return <MoonIcon id='moon' onClick={handleMode} className="h-6 w-10 text-white font-bold text-2xl" />
    }
    else {
      return <SunIcon id='sun' onClick={handleMode} className="h-6 w-10 text-white font-bold text-2xl" />
    }
    // mode ? <MoonIcon onClick={() => setMode(!mode)} className="h-6 w-10 text-white font-bold text-2xl" /> : <SunIcon onClick={() => setMode(!mode)} className="h-6 w-10 text-white font-bold text-2xl" />
  }
  const router = createBrowserRouter([
    { path: '/', element: <LogIn changeMode={changeMode} mode={mode}></LogIn> },
    {
      path: '/registrationPage', element: <RegistrationPage
        changeMode={changeMode}
        mode={mode}
      ></RegistrationPage>
    }
  ]);
  return (
    <div className="App">
      {/* <h1 className='text-5xl'>Hii From App.js</h1> */}
      <RouterProvider
        router={router}
      ></RouterProvider>


    </div>
  );
}

export default App;
