import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faCheck from '@fortawesome/fontawesome-free-solid/faCheck';

import '../../../styles/smart/buttons/button.css';

class OracleButton extends PureComponent {
    render() {

        const {checked, title, onClick} = this.props;

        return (
            <div onClick={onClick} className={checked ? 'button _checked' : 'button'}>
                <div className="button__check"><FontAwesomeIcon icon={faCheck}/></div>
                <div className="button__text">{title}</div>
            </div>
        );
    }
}

OracleButton.propTypes = {
    title: PropTypes.string,
    type: PropTypes.string,
    checked: PropTypes.bool,
    onClick: PropTypes.func
};

export default OracleButton;