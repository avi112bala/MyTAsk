
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './component/Login';
import Thanks from './component/Thanks';
import Navbar from './component/Navbar';
import Data from './component/Data';
import Home from './component/Home';
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home/>}></Route>
            <Route path='/signin' element={<Login />}></Route>
            <Route path="/thanks" element={<Thanks />}></Route>
            <Route path="/data" element={<Data/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
