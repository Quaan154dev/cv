import './App.css';
import Home from './Components/Home/Home';
import Dogs from './Components/Dogs/Dogs';
import Cart from './Components/Cart/Cart';
import Navbar from './Navbar/Navbar';
import { Route, Routes } from "react-router";
import { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios, { Axios } from 'axios';
import { CartConext } from './Contexts/CartConext';

function App() {
  const [allDogs,setAllDogs] = useState([]);
  const [myCart,setMyCart] = useState([{}]);
  console.log(myCart);
  const [total,setTotal] = useState(0);
  console.log(allDogs);
  useEffect(() => {
    async function getdate () {
      const res = await axios.get("/v1/dog");
      return res;
      }
      getdate().then((res) => setAllDogs(res.data));
      getdate().catch((err) => console.log(err));
  },[]);

  return (
    <div className="App">
      <CartConext.Provider value={{myCart,setMyCart,total,setTotal}}>
         <Navbar></Navbar>
         <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/home' element={<Home></Home>}></Route>
            <Route path='/dogs' element={<Dogs allDogs={allDogs} ></Dogs>}></Route>
            <Route path='/checkout' element={<Cart allDogs={allDogs}></Cart>}></Route>
         </Routes>
      </CartConext.Provider>
    </div>
  );
}

export default App;
