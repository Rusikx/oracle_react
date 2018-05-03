import React, {Component} from 'react';
import {observer} from 'mobx-react';
import control from "../storages/ViewPartsControl";
import CategoryPane from "../components/smart/CategoryPane";

import '../styles/smart/categories.css';

@observer
class Container extends Component {
    state = {
        mounted: true
    };

    choiceProduct() {
        control.hideAll();
    };

    render() {
        return (
            <div className="main-content">
                <div className="category-title">Что вы хотите?</div>
                <div className="category-panel">
                    <CategoryPane image='express.svg' text='Кредит наличными' selected={false}/>
                    <CategoryPane image='auto.svg' text='Автокредит' selected={false}/>
                    <CategoryPane image='credline.svg' text='Кредит под залог' selected={false}/>
                    <CategoryPane image='hypotech.svg' text='Ипотека' selected={false}/>
                </div>
            </div>
        );
    }
}

export default Container;