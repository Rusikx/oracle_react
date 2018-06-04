import React, {Component} from 'react';
import {observer} from 'mobx-react';
import PropTypes from 'prop-types';

import AnswersWidget from "../smart/AnswersWidget";

import '../../styles/smart/questions.css';
import {questions} from "../../mst/store";
import {GET_BY_ID} from "../../mst/constants/questions";

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
}

QuestionsWidget.propTypes = {
    id: PropTypes.number
};

export default QuestionsWidget;