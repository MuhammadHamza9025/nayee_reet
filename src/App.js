

import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Mens from './Mens_Components/Mens';
import Footer from './Components/Footer';
import Women from './Women/Women';
import Kids from './Components/Kids';
import About from './Components/About';
import ProductDis from './Components/ProductDis';
import { Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Cart from './Components/Cart';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>

          <Route exact path='/' element={<Home></Home>}></Route>
          <Route exact path='/Mens' element={<Mens></Mens>}></Route>
          <Route path='/Women' element={<Women></Women>}></Route>
          <Route path='/kids' element={<Kids></Kids>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/product/:id' element={<ProductDis></ProductDis>}></Route>
          <Route path='/cart' element={<Cart></Cart>}></Route>

        </Routes>
        <Footer></Footer>
      </BrowserRouter>







    </>
  );
}

export default App;
