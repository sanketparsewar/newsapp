// import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


export class App extends Component {
  country='in';
  pageSize=20;
  render() {               //render method is lifecycle method it renders html on screen
    return (
      <div>
        <Router>
        <Navbar/>
        {/* <News pageSize={this.pageSize} country={'in'} category={'sports'}/> */}
        <Routes>
          {/* key is used for uniwue identificationa dn reload of page content */}
            <Route exact path="/" element={<News key='general' pageSize={this.pageSize} country={this.country} category={'general'}/>} />
            <Route exact path="/business" element={<News key='business' pageSize={this.pageSize} country={this.country} category={'business'}/>} />
            <Route exact path="/entertainment" element={<News key='entertainment' pageSize={this.pageSize} country={this.country} category={'entertainment'}/>} />
            <Route exact path="/health" element={<News key='health' pageSize={this.pageSize} country={this.country} category={'health'}/>} />
            <Route exact path="/science" element={<News key='science' pageSize={this.pageSize} country={this.country} category={'science'}/>} />
            <Route exact path="/sports" element={<News key='sports' pageSize={this.pageSize} country={this.country} category={'sports'}/>} />
            <Route exact path="/technology" element={<News key='technology' pageSize={this.pageSize} country={this.country} category={'technology'}/>} />
        </Routes>

      </Router>

      </div>
    )
  }
}

export default App


