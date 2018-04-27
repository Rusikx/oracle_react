import React, {Component} from 'react';
import './styles/styles.css';
import Header from "./components/static/header";
import Footer from "./components/static/footer";
import Container from "./pages/Container";
import './styles/font-awesome.css';
import Banner from "./components/static/banner";
import {observer} from 'mobx-react';
import PropTypes from 'prop-types';
import ViewPartsControl from "./storages/ViewPartsControl";
import Condition from "./components/static/condition";

@observer
class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                { this.props.viewControl.show_banner ? <Banner/> : ''}
                <Container viewControl={this.props.viewControl} />

                { this.props.viewControl.show_condition ? <Condition/> : ''}
                { this.props.viewControl.show_footer ? <Footer/> : ''}
            </div>
        );
    }
}

App.propTypes = {
    viewControl: PropTypes.instanceOf(ViewPartsControl)
}

export default App;
