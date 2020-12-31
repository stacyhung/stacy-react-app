import React from "react";
import NavBar from "./components/NavBar";
import Body from "./components/Body";
import Footer from "./components/Footer";
import './css/App.css';


function App() {
  return (
    <div className="App">
      <div className="App-content">
        <NavBar />
        <Body />
        <Footer />
      </div>
    </div >
  );
}

export default App;
