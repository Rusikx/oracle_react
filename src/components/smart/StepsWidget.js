import React, {Component} from 'react';
import {observer} from 'mobx-react';
import PropTypes from 'prop-types';

import CategorySelector from "./CategorySelector";
import QuestionsWidget from "../smart/QuestionsWidget";

import {steps} from '../../mst/store';
import {GO_BACK, GO_NEXT} from "../../mst/constants/steps";

import '../../styles/smart/steps.css';
import '../../styles/smart/pagination.css';

@observer
class StepsWidget extends Component {

    // constructor(props) {
    //     super(props);
    // }

    render() {

        if (steps.current.type === 'category') {
            return <div id='content' className='steps-widget'>
                <CategorySelector onSelect={this.props.onSelect}/>
            </div>
        }

        return <div className='steps-widget'>
            {
                steps.current.questions
                    .map(question => <QuestionsWidget key={`question-${question.id}`}
                                                      onFinish={this.props.onFinish}
                                                      id={question.id}/>)
            }
            <div className='steps-paginator'>
                {
                    steps.previous ? <div className='step-btn btn-prev'
                                          onClick={steps[GO_BACK]}
                    >Назад
                    </div> : ''
                }
                {
                    steps.next ? <div className='step-btn btn-next'
                                      onClick={() => steps.current.isComplete ? steps[GO_NEXT]() : ''}
                    >Вперед</div> : ''
                }
            </div>
        </div>;
    }

}

StepsWidget.propTypes = {
    onSelect: PropTypes.func,
    onFinish: PropTypes.func,
};

export default StepsWidget;