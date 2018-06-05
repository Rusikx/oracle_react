import React, {Component} from 'react';
import PropTypes from 'prop-types';

import '../../../styles/smart/buttons/input.css';

class OracleFormInput extends Component {

    constructor(props) {
        super(props);
        this.state = {
            blur: false,
            value: null,
            select: false
        }
    }

    select() {
        this.setState({
            blur: false,
            select: true,
            value: this.props.value
        })
    }

    blurInput(event) {
        this.props.onFill(event.target.value);
        this.setState({
            blur: true,
            select: false,
            value: event.target.value
        })
    }

    render() {
        return (
            <div onClick={this.select.bind(this)}
                 className={this.state.select || this.props.active ? 'form-container _active' : 'form-container'}
            >
                <label htmlFor={this.props.id} className='form-label'>
                    {this.props.label}
                </label>
                <input id={this.props.id}
                       type='text'
                       className={this.state.blur ? 'form-control oracle-from-input _blur' : 'form-control oracle-from-input'}
                       placeholder={this.props.placeholder}
                       onBlur={this.blurInput.bind(this)}
                       defaultValue={this.props.value === null ? '' : this.props.value}
                />
            </div>
        );
    }
}

OracleFormInput.propTypes = {
    id: PropTypes.string,
    placeholder: PropTypes.string,
    active: PropTypes.bool,
    onFill: PropTypes.func,
    value: PropTypes.any
};

export default OracleFormInput;