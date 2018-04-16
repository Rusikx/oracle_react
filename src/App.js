import React, {Component} from 'react';
import './styles/styles.css';
import Header from "./components/static/header";
import Footer from "./components/static/footer";
import Container from "./pages/Container";
import './styles/font-awesome.css';

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
