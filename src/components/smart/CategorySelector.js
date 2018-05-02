import React, {Component} from 'react';
import {observer} from 'mobx-react';

import '../../styles/categories.css';
import control from "../../storages/ViewPartsControl";
import category from "../../storages/CategoryControl";
import CategoryPane from "../smart/CategoryPane";

@observer
class CategorySelector extends Component {
    render() {

        console.log(category.category);

        return (
            <div className="main-content">
                <div className="category-title">Что вы хотите?</div>
                <div className="category-panel">
                    <CategoryPane
                        image='express.svg'
                        onSelect = {()=>{
                            category.showExpress();
                            control.hideAll();
                        }}
                        text='Кредит наличными'
                        selected={category.show_express}
                    />
                    <CategoryPane
                        image='auto.svg'
                        onSelect = {()=>{
                            category.showAuto();
                            control.hideAll();
                        }}
                        text='Автокредит'
                        selected={category.show_auto}
                    />
                    <CategoryPane
                        image='credline.svg'
                        onSelect = {()=>{
                            category.showPledge();
                            control.hideAll();
                        }}
                        text='Кредит под залог'
                        selected={category.show_pledge}
                    />
                    <CategoryPane
                        image='hypotech.svg'
                        onSelect = {()=>{
                            category.showHypothec();
                            control.hideAll();
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