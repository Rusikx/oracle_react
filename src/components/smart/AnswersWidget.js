import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import OracleButton from "../buttons/OracleButton";
import OracleButtonInput from "../buttons/OracleButtonInput";

import '../../styles/smart/answers.css';

class QuestionsWidget extends PureComponent {
	render (){
		return (
            <div className="answers">
	            {(() => {
		            switch (this.props.type) {
			            case 'button':
			            	return <OracleButton
					            title={this.props.title}
					            type={this.props.type}
				            />;
			            case 'input-OracleButton':
			            	return <OracleButtonInput
					            title={this.props.title}
					            type={this.props.type}
				            />;
			            default:
			            	return <div>{JSON.stringify(this.props)}</div>;
		            }
	            })()}
        </div>
		);
	}
}

QuestionsWidget.propTypes = {
	id: PropTypes.number,
	step_id: PropTypes.number,
	question_id: PropTypes.number,
	title: PropTypes.string,
	name: PropTypes.string,
	type: PropTypes.string,
	answer: PropTypes.string,
};

export default QuestionsWidget;