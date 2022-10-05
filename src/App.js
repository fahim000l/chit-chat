import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import LogIn from './components/LogIn/LogIn';

function App() {

  const router = createBrowserRouter([
    { path: '/', element: <LogIn></LogIn> }
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
