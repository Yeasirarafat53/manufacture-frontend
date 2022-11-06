import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './screen/HomeScreen';
import ProductDetails from './screen/ProductDetails';
import Footer from './components/Footer';
import RegisterScreen from './screen/RegisterScreen';
import CartScreen from './screen/CartScreen';


// export const UserContext = createContext();


function App() {
  //  const [details, setDetails] = useState([]);
  return (
    <>
      {/* <UserContext.Provider value={[details, setDetails]}> */}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/register" element={<RegisterScreen />}></Route>
          <Route path="/product/:id" element={<ProductDetails />}></Route>
          <Route path="/cart/:id" element={<CartScreen />}></Route>
          <Route path="/cart" element={<CartScreen />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
      {/* </UserContext.Provider> */}
    </>
  );
}

export default App;
