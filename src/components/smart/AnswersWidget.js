import React, {Component} from 'react';
import {observer} from 'mobx-react';
import PropTypes from 'prop-types';

import OracleButton from "./buttons/OracleButton";
import OracleButtonInput from "./buttons/OracleButtonInput";

import '../../styles/smart/answers.css';
import {answers, steps} from "../../mst/store";
import {ACTIVATE_ANSWER, GET_BY_ID} from "../../mst/constants/answers";
import {FILL_VALUE, FLUSH_VALUES, PREPARE_VALUE} from "../../mst/constants/questions";
import {GET_STEP_BY_ID, GO_NEXT} from "../../mst/constants/steps";

@observer
class AnswersWidget extends Component {

    constructor(props) {
        super(props);

        this.state = {
            answer: answers[GET_BY_ID](props.id)
        }
    }

    activate(answer){
        answer[ACTIVATE_ANSWER]();
        if(answer.step.isComplete){
            steps[GO_NEXT]();
        }
    }

    render() {

        const answer = this.state.answer;

        if (answer.type === 'button') {
            return <div className="answer">
                <OracleButton
                    title={answer.title}
                    type={answer.type}
                    checked={answer.active}
                    onClick={()=>this.activate(answer)}
                />
            </div>
        }

        if (answer.type === 'input-button') {
            return <div className="answer">
                <OracleButtonInput
                    title={answer.title}
                    type={answer.type}
                    active={answer.active}
                    value={answer.question.value}
                    onSelect={answer[PREPARE_VALUE]}
                    onFill={value => answer[FILL_VALUE](value)}
                />
            </div>
        }

        return (
            <div className="answer">
                <div>{JSON.stringify(answer)}</div>
            </div>
        );
    }
}

AnswersWidget.propTypes = {
    id: PropTypes.number
};

export default AnswersWidget;