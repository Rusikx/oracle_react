import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import '../../../styles/smart/buttons/label_input.css';

class OracleSubmit extends PureComponent {
    render() {

        const {active, onClick} = this.props;

        return (
            <div onClick={ (event)=>{ return active? onClick(event) : ()=>{}; } } className={active ? 'form-button _checked' : 'form-button'}>
                Отправить
            </div>
        );
    }
}

OracleSubmit.propTypes = {
    active: PropTypes.bool,
    onClick: PropTypes.func
};

export default OracleSubmit;