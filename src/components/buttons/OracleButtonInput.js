import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import '../../styles/buttons/button_input.css';

class OracleButtonInput extends PureComponent {
	render (){
		return (
			<div onClick={()=>this.props.onClick()} className={this.props.action ? 'button _input _action' : 'button _input'}>
				{(() => {
					if(this.props.action){
						return <input className="button__input" placeholder={this.props.title} type="tel" />;
					}else{
						return <div className="button__text">{this.props.title}</div>;
					}
				})()}
			</div>
		);
	}
}

OracleButtonInput.propTypes = {
	title: PropTypes.string,
	type: PropTypes.string,
	action: PropTypes.bool,
	onClick: PropTypes.func,
};

export default OracleButtonInput;