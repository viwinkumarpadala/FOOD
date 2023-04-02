import './App.css';
import Home from './screens/Home';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from './screens/Login';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min'
import Signup from './screens/Signup';
import { Cartprovider } from './components/Contextreducer';
import Cart from './screens/Cart';

function App() {
  return (
    <Cartprovider>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path='/cart' element={<Cart/>}/>
        </Routes>
      </Router>
    </Cartprovider>
      
   
   

    

  );
}

export default App;
