import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faCheck from '@fortawesome/fontawesome-free-solid/faCheck';

import '../../styles/buttons/button.css';

class OracleButton extends PureComponent {
	render (){
		return (
			<div className={`_button ${this.props.type}`}>
				<div className="button__check"><FontAwesomeIcon icon={faCheck}/></div>
				<div className="button__text">{this.props.title}</div>
			</div>
		);
	}
}

OracleButton.propTypes = {
	title: PropTypes.string,
	type: PropTypes.string,
};

export default OracleButton;