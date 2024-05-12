import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './components/Home';
import ContactUs from './components/ContactUs';
import About from './components/About';
import Tools from './components/Tools';
import Navbar from './components/Navbar'
import ComingSoon from './components/ComingSoon';
function App() {
  return (
    <div className=''>
    <Router>
   
<Routes>
<Route path='/' element={<Home/>}></Route>
<Route path='/contact' element={<ContactUs/>}></Route>
<Route path='/comingsoon' element={<ComingSoon/>}></Route>

<Route path='/about' element={<About/>}></Route>

<Route path='/tools' element={<Tools/>}></Route>


</Routes>
</Router>
</div>
  );
}

export default App;
