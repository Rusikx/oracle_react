import React, {PureComponent} from 'react';
// import PropTypes from 'prop-types';

import '../../styles/smart/typ.css';

class typ extends PureComponent {

    render() {
        return (
            <div className="typ">
                <div className="typ__content">
                    <div className="typ__title">
                        {/*{ this.props.last_name }
	                    { this.props.first_name }
	                    { this.props.middle_name }
	                    { this.props.questions }*/}
	                    Ваша заявка уже отправлена в банки<br/>
                        Ждите звонка!
                    </div>
                    <div className="typ__img"></div>
                </div>
            </div>
        );
    }
}

/*typ.propTypes = {
	questions: PropTypes.array,
};*/

export default typ;