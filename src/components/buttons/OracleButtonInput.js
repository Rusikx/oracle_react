import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import '../../styles/buttons/button.css';

class OracleButtonInput extends PureComponent {
	render (){
		return (
			<div className={`button _input`}>
				<input className="button__input" placeholder={this.props.title} type="tel" />
				<div className="button__text">{this.props.title}</div>
			</div>
		);
	}
}

OracleButtonInput.propTypes = {
	title: PropTypes.string,
	type: PropTypes.string,
};

export default OracleButtonInput;