import React, {Component} from 'react';
// import './App.css';
import './styles/footer.css';
import './styles/styles.css';
import Header from "./components/static/header";
import Footer from "./includes/footer";
import Container from "./pages/Container";
// import "./includes/fontawesome.js";

class App extends Component {

    state = {
        'show-head': true,
    };

    hideHeader() {
        this.setState({
            'show-head': false
        });
        console.log(this.state);
    }

    render() {
        return (
            <div className="App">
                {this.state['show-head'] ? <Header/> : ''}
                <Container />
                <Footer/>
            </div>
        );
    }
}

export default App;
