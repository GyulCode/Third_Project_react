import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./mainFrame/Header";
import Home from "./mainFrame/Home";
import Footer from "./mainFrame/Footer";



function App() {
  return (
      <Router>
          <Header/>
              <div id={"root"}>
                  <Routes>
                      <Route exact path={"/"} element={<Home/>}/>
                  </Routes>
              </div>
          <Footer/>
      </Router>
  );
}

export default App;
