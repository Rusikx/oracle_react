import React, {Component} from 'react';
import PropTypes from 'prop-types';

import '../../../styles/smart/buttons/input.css';

class OracleInput extends Component {

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
                 className={this.state.select || this.props.active ? 'input-container _active' : 'input-container'}
            >
                <input autoFocus={this.state.select || this.props.active}
                       className={this.state.blur ? 'oracle-input _blur' : 'oracle-input'}
                       placeholder={this.props.placeholder}
                       onBlur={this.blurInput.bind(this)}
                       defaultValue={this.props.value === null ? '' : this.props.value}
                />
            </div>
        );
    }
}

OracleInput.propTypes = {
    placeholder: PropTypes.string,
    active: PropTypes.bool,
    onFill: PropTypes.func,
    value: PropTypes.any
};

export default OracleInput;