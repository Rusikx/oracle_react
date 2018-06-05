import React, {Component} from 'react';
import './styles/styles.css';
import Header from "./components/static/header";
import Footer from "./components/static/footer";
import './styles/font-awesome.css';
import Banner from "./components/static/banner";
import Typ from "./components/smart/Typ";
import {observer} from 'mobx-react';
import control from "./storages/ViewPartsControl";
import Condition from "./components/static/condition";
import StepsWidget from "./components/smart/StepsWidget";

@observer
class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                {control.show_banner ? <Banner/> : ''}
                {!control.show_finish ?
                    <StepsWidget onSelect={() => control.hideAll()} onFinish={() => control.finish()} /> : ''}
                {control.show_condition ? <Condition/> : ''}
                {control.show_finish ? <Typ /> : ''}
                {/*{//JSON.stringify(questions[GET_ANSWERS]())}*/}
                {control.show_footer ? <Footer/> : ''}
            </div>
        );
    }
}

export default App;
