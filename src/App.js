
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Component/login';
import { Home } from './Component/Home';
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
