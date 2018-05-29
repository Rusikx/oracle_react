import React, {Component} from 'react';
import {observer} from 'mobx-react';

import '../../styles/smart/categories.css';
import control from "../../storages/ViewPartsControl";
import category from "../../storages/CategoryControl";
import CategoryPane from "../smart/CategoryPane";

import quiz_control from "../../storages/QuizControl";

@observer
class CategorySelector extends Component {
    render() {
        return (
            <div className="main-content">
                <div className="category-title">Что вы хотите?</div>
                <div className="category-panel">
                    <CategoryPane
                        image='express.svg'
                        onSelect = {()=>{
                            category.showExpress();
                            control.hideAll();
                            quiz_control.goToNextStep();
                        }}
                        text='Кредит наличными'
                        selected={category.show_express}
                    />
                    <CategoryPane
                        image='auto.svg'
                        onSelect = {()=>{
                            category.showAuto();
                            control.hideAll();
                            quiz_control.goToNextStep();
                        }}
                        text='Автокредит'
                        selected={category.show_auto}
                    />
                    <CategoryPane
                        image='credline.svg'
                        onSelect = {()=>{
                            category.showPledge();
                            control.hideAll();
                            quiz_control.goToNextStep();
                        }}
                        text='Кредит под залог'
                        selected={category.show_pledge}
                    />
                    <CategoryPane
                        image='hypotech.svg'
                        onSelect = {()=>{
                            category.showHypothec();
                            control.hideAll();
                            quiz_control.goToNextStep();
                        }}
                        text='Ипотека'
                        selected={category.show_hypothec}
                    />
                </div>
            </div>
        );
    }
}

export default CategorySelector;