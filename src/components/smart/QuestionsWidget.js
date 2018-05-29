import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import AnswersWidget from "../smart/AnswersWidget";

import '../../styles/smart/questions.css';

class QuestionsWidget extends PureComponent {
	render (){
		return (
            <div className="questions">
	            <div className="questions__title">{this.props.title}</div>
	            <div className="questions__content">
		            {
		            	this.props.answers.map((answer)=>{
		                    if((answer.step_id === this.props.step_id)&&(answer.question_id === this.props.id)){
			                    return <AnswersWidget
				                    id={answer.id}
				                    step_id={answer.step_id}
				                    question_id={answer.question_id}
				                    title={answer.title}
				                    value={answer.value}
				                    type={answer.type}
				                    active={answer.active}
			                    />
		                    }else{
			                    // return <div>{JSON.stringify(answer)}</div>
		                    }
			            })
		            }
	            </div>
            </div>
		);
	}
}

QuestionsWidget.propTypes = {
	id: PropTypes.number,
	step_id: PropTypes.number,
	title: PropTypes.string,
	name: PropTypes.string,
	type: PropTypes.string,
	answer: PropTypes.string,

	answers: PropTypes.array,
};

export default QuestionsWidget;