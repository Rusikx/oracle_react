import React, {Component} from 'react';
import {observer} from 'mobx-react';
import PropTypes from 'prop-types';

import OracleButton from "./buttons/OracleButton";
import OracleButtonInput from "./buttons/OracleButtonInput";

import '../../styles/smart/answers.css';
import {answers} from "../../mst/store";
import {ACTIVATE_ANSWER, GET_BY_ID} from "../../mst/constants/answers";

@observer
class AnswersWidget extends Component {

    constructor(props) {
        super(props);

        this.state = {
            answer: answers[GET_BY_ID](props.id)
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
                    onClick={answer[ACTIVATE_ANSWER]}
                />
            </div>
        }

        if (answer.type === 'input-button') {
            return <div className="answer">
                <OracleButtonInput
                    title={answer.title}
                    type={answer.type}
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