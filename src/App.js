// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import "./components/Navbar.css"
import Shop from './pages/Shop/Shop';
import Cart from './pages/Cart/Cart';
import Login from './pages/details/Login';
import Signup from './pages/details/Signup';
import { ShopContextProvider } from './context/Shop-context';
function App() {
  return (
    <div className="App">
      <ShopContextProvider>
     <Router>
      <Navbar/>
      <Routes>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/SignUp' element={<Signup/>}/>
        <Route path='/' element={<Shop/>}/>
        <Route path='/Cart' element={<Cart/>} />
      </Routes>
     </Router>
     </ShopContextProvider>
    </div>
  );
}

export default App;
