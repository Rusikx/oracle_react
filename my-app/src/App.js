import React, { Component } from 'react';

// import './App.css';
import './styles/header.css';
import './styles/footer.css';
import './styles/styles.css';
import Header from "./includes/header";
import Footer from "./includes/footer";
import Container from "./pages/Container";
import "./includes/fontawesome.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Container/>
        <Footer/>
      </div>
    );
  }
}

export default App;
