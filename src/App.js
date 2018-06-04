import React, {Component} from 'react';
import './styles/styles.css';
import Header from "./components/static/header";
import Footer from "./components/static/footer";
import './styles/font-awesome.css';
import Banner from "./components/static/banner";
import {observer} from 'mobx-react';
import control from "./storages/ViewPartsControl";
import Condition from "./components/static/condition";
import StepsWidget from "./components/smart/StepsWidget";
import {questions} from "./mst/store";
import {GET_ANSWERS} from "./mst/constants/questions";

@observer
class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                {control.show_banner ? <Banner/> : ''}
                {!control.show_finish ? <StepsWidget onSelect={()=> control.hideAll()} onFinish={()=> control.finish()} /> : ''}
                {control.show_condition ? <Condition/> : ''}
                {control.show_finish ? <div>
                    Thank You Page
                    {JSON.stringify(questions[GET_ANSWERS]())}
                </div> : ''}
                {control.show_footer ? <Footer/> : ''}
            </div>
        );
    }
}

export default App;
