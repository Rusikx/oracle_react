import React, { PureComponent } from 'react';

import '../../styles/fields/_button.css';

class button extends PureComponent {
	render (){
		return (
            <div className="button">
	            <span><i class="fa fa-check"></i></span>
	            <p>До 100 000 ₸</p>
            </div>
		);
	}
}

export default button;