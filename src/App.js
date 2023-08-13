import { Route, Routes } from 'react-router';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Cart from './pages/Cart';

import './styles/app.scss';

function App() {
  return (
    <div className="App" style={{fontFamily:'sans-serif'}}>
      <div className='navbar'>
        <Navbar/>
      </div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </div>
  );
}

export default App;
