import './css/App.css';
import Header from "./components/Header";
import React from "react";
import HeaderFooter from "./components/HeaderFooter";
import MenuItem from "./components/MenuItem";
import Menu from "./components/Menu";
import MainContent from "./components/MainContent";

function App() {
    let arr = new Array(20);


  return (
    <div className="App">
      <Header/>
        <div className="mainHeaderFooter">
            <HeaderFooter/>
            <HeaderFooter/>
            <HeaderFooter/>
            <HeaderFooter/>
            <HeaderFooter/>
            <HeaderFooter/>
            <HeaderFooter/>
            <HeaderFooter/>
            <HeaderFooter/>
            <HeaderFooter/>
            <HeaderFooter/>
            <HeaderFooter/>
            <HeaderFooter/>
            <HeaderFooter/>
            <HeaderFooter/>
            <HeaderFooter/>
            <HeaderFooter/>
            <HeaderFooter/>
            <HeaderFooter/>
            <HeaderFooter/>
        </div>
        <div>
            <Menu/>
        </div>
        <div>
            <MainContent/>
        </div>
    </div>
  );
}

export default App;
