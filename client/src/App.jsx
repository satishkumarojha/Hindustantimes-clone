import "./App.css";
import { Navbar } from "./components/Navbar";
// import {Routes,Route} from "react-router-dom"
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import {ContainerInvelop} from './components/ContainerInvelop'
import { MobileSign } from "./components/MobileSign";
import { Home } from "./components/Home";
function App() {
  return (
    <div className='App'>
     
      <Router>
      {/* <Navbar /> */}
       <Routes>
       <Route exact path="/" element={<Navbar/>}></Route>
       <Route exact path="/password" element={<MobileSign/>}></Route>
       <Route exact path="/signin" element={<ContainerInvelop/>}></Route>
       </Routes>
       
       
       
      </Router>
     
    </div>
  );
}

export default App;
