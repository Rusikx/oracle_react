import React, {Component} from 'react';
import {observer} from 'mobx-react';
import PropTypes from 'prop-types';

import '../../styles/smart/categories.css';
import CategoryPane from "../smart/CategoryPane";
import * as CATEGORY from '../../mst/constants/category';
import * as QUESTIONS from '../../mst/constants/questions';
import * as ANSWERS from '../../mst/constants/answers';
import * as STEPS from '../../mst/constants/steps';

import {answers, category, questions, steps} from '../../mst/store';
import {ViewPartsControl} from "../../storages/ViewPartsControl";

@observer
class CategorySelector extends Component {

    async loadCategory(cat) {
        this.props.onSelect();

        await steps[STEPS.LOAD_CATEGORY_STEPS](cat);
        await questions[QUESTIONS.LOAD_CATEGORY_QUESTIONS](cat);
        await answers[ANSWERS.LOAD_CATEGORY_ANSWERS](cat);
        category[CATEGORY.SELECT_CATEGORY](cat);
    }

    render() {
        return (
            <div className="main-content">
                <div className="category-title">Что вы хотите?</div>
                <div className="category-panel">
                    <CategoryPane
                        image='express.svg'
                        onSelect={() => this.loadCategory('express')}
                        text='Кредит наличными'
                        selected={category.category === 'express'}
                    />
                    <CategoryPane
                        image='auto.svg'
                        onSelect={() => this.loadCategory('auto')}
                        text='Автокредит'
                        selected={category.category === 'auto'}
                    />
                    <CategoryPane
                        image='credline.svg'
                        onSelect={() => this.loadCategory('pledge')}
                        text='Кредит под залог'
                        selected={category.category === 'pledge'}
                    />
                    <CategoryPane
                        image='hypotech.svg'
                        onSelect={() => this.loadCategory('hypothec')}
                        text='Ипотека'
                        selected={category.category === 'hypothec'}
                    />
                </div>
            </div>
        );
    }
}

CategorySelector.propTypes = {
    onSelect: PropTypes.func
};

export default CategorySelector;