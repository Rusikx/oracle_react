import React, {Component} from 'react';
import {observer} from 'mobx-react';
import PropTypes from 'prop-types';

import AnswersWidget from "../smart/AnswersWidget";

import '../../styles/smart/questions.css';
import {questions} from "../../mst/store";
import {GET_BY_ID, SET_VALUE} from "../../mst/constants/questions";
import OracleInput from "./buttons/OracleInput";
import OracleFormSelect from "./buttons/OracleFormSelect";
import OracleFormInput from "./buttons/OracleFormInput";
import OracleSubmit from "./buttons/OracleSubmit";

@observer
class QuestionsWidget extends Component {

    constructor(props) {
        super(props);

        this.state = {
            question: questions[GET_BY_ID](props.id)
        }
    }

    render() {

        const question = this.state.question;

        if (question.type === 'btn_bar') {
            return (
                <div className="questions">
                    <div className="questions__title">{question.title}</div>
                    <div className="questions__content">
                        {
                            question.answers
                                .map(answer => <AnswersWidget key={`answer-${answer.id}`} id={answer.id}/>)
                        }
                    </div>
                </div>
            );
        }

        if (question.type === 'input_question') {
            return (
                <div className="questions">
                    <div className="questions__title">{question.title}</div>
                    <div className="questions__content">
                        <OracleInput
                            value={question.value}
                            active={question.answered}
                            onFill={question[SET_VALUE]}
                        />
                    </div>
                </div>
            );
        }
        if (question.type === 'form_select') {
            return (
                <div className="questions">
                    <div className="questions__content">
                        <OracleFormSelect
                            id={question.name}
                            label={question.title}
                            values={question.values}
                            active={question.answered}
                            onSelect={question[SET_VALUE]}
                        />
                    </div>
                </div>
            );
        }
        if (question.type === 'form_input') {
            return (
                <div className="questions">
                    <div className="questions__content">
                        <OracleFormInput
                            id={question.name}
                            label={question.title}
                            values={question.values}
                            value={question.value}
                            active={question.answered}
                            onFill={question[SET_VALUE]}
                        />
                    </div>
                </div>
            );
        }
        if (question.type === 'form_submit') {
            return <OracleSubmit
                active={question.step.isComplete}
                onClick={this.props.onFinish}
            />
        }

        console.log(question.type);
    }
}

QuestionsWidget.propTypes = {
    id: PropTypes.number,
    onFinish: PropTypes.func,
};

export default QuestionsWidget;