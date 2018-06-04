import React, {Component} from 'react';
import PropTypes from 'prop-types';

import '../../../styles/smart/buttons/button_input.css';

class OracleButtonInput extends Component {

    constructor(props) {
        super(props);
        this.state = {
            input: false,
            blur: false,
            value: null
        }
    }

    enableInput() {
        this.setState({
            input: true,
            blur: false,
            value: this.state.value
        })
    }

    blurInput(event) {
        this.setState({
            input: true,
            blur: true,
            value: event.target.value
        })
    }

    render() {
        return (
            <div onClick={() => this.enableInput()}
                 className={this.state.input ? 'button _input _action' : 'button _input'}
            >
                {(() => {
                    if (this.state.input) {
                        return <input
                            className={this.state.blur ? "button__input _blur" : "button__input"}
                            placeholder={this.props.title} type="tel"
                            onBlur={this.blurInput.bind(this)}
                        />;
                    } else {
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