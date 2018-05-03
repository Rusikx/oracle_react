import React, {Component} from 'react';
import './styles/styles.css';
import Header from "./components/static/header";
import Footer from "./components/static/footer";
import './styles/font-awesome.css';
import Banner from "./components/static/banner";
import {observer} from 'mobx-react';
import control from "./storages/ViewPartsControl";
import Condition from "./components/static/condition";
import CategorySelector from "./components/smart/CategorySelector";

@observer
class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                { control.show_banner ? <Banner/> : ''}
                <CategorySelector/>
                { control.show_condition ? <Condition/> : ''}
                { control.show_footer ? <Footer/> : ''}
            </div>
        );
    }
}

export default App;
