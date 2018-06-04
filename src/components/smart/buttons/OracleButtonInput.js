import React, {Component} from 'react';
import PropTypes from 'prop-types';

import '../../../styles/smart/buttons/button_input.css';

class OracleButtonInput extends Component {

    constructor(props) {
        super(props);
        this.state = {
            blur: false,
            value: null
        }
    }

    enableInput() {
        this.props.onSelect();
        this.setState({
            blur: false,
            value: this.state.value
        });
    }

    blurInput(event) {
        this.props.onFill(event.target.value);
        this.setState({
            blur: true,
            value: event.target.value
        })
    }

    render() {
        return (
            <div onClick={() => this.enableInput()}
                 className={this.props.active ? 'button _input _action' : 'button _input'}
            >
                {(() => {
                    if (this.props.active) {
                        return <input autoFocus={true}
                            className={this.state.blur ? "button__input _blur" : "button__input"}
                            placeholder={this.props.title} type="tel"
                            onBlur={this.blurInput.bind(this)}
                                      defaultValue={this.props.value === null ? '' : this.props.value}
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
    active: PropTypes.bool,
    onSelect: PropTypes.func,
    onFill: PropTypes.func,
    value: PropTypes.any
};

export default OracleButtonInput;