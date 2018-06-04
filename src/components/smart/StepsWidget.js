import React, {Component} from 'react';
import {observer} from 'mobx-react';

import CategorySelector from "./CategorySelector";
import QuestionsWidget from "../smart/QuestionsWidget";

import {steps} from '../../mst/store';
import {GO_BACK, GO_NEXT} from "../../mst/constants/steps";

@observer
class StepsWidget extends Component {

    // constructor(props) {
    //     super(props);
    // }

    render() {

        if (steps.current.type === 'category') {
            return <div className='steps-widget'>
                <CategorySelector/>
            </div>
        }

        return <div className='steps-widget'>
            <div>
                {
                    steps.current.questions
                        .map(question => <QuestionsWidget key={`question-${question.id}`} id={question.id}/>)
                }
            </div>
            <div className='steps-paginator'>
                {
                    steps.previous ? <div className='step-btn btn-prev'
                                          onClick={steps[GO_BACK]}
                    >Назад
                    </div> : ''
                }
                {
                    steps.next ? <div className='step-btn btn-next'
                                      onClick={steps[GO_NEXT]}
                    >Вперед</div> : ''
                }
            </div>
        </div>;
    }

}

export default StepsWidget;