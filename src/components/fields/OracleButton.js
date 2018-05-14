import React, { PureComponent } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faCheck from '@fortawesome/fontawesome-free-solid/faCheck';

import '../../styles/fields/_button.css';

class OracleButton extends PureComponent {
	render (){
		return (
            <div className="button">
	            <div className="button__check"><FontAwesomeIcon icon={faCheck}/></div>
	            <div className="button__text">До 100 000 ₸</div>
            </div>
		);
	}
}

export default OracleButton;