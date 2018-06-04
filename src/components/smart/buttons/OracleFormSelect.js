import React, {Component} from 'react';
import PropTypes from 'prop-types';

import '../../../styles/smart/buttons/label_input.css';
import {answers} from "../../../mst/store";

class OracleFormSelect extends Component {

    select(event){
        this.props.onSelect(event.target.value);
    }

    render() {
        return (
            <div className={this.props.active ? 'form-container _active' : 'form-container'}>
                <label htmlFor={this.props.id} className='form-label'>
                    {this.props.label}
                </label>
                <select id={this.props.id}
                    onChange={this.select.bind(this)}
                    defaultValue={this.props.value ? this.props.value : ''}
                    className={this.props.active ? 'form-control oracle-from-select _selected' : 'form-control oracle-from-select'}>
                    <option value={''} disabled >Выберите {this.props.label}</option>
                    {
                        this.props.values.map(item =>
                            <option key={`option-${item.value}`}
                                value={item.value}
                               >
                                {item.title}</option>
                        )
                    }
                </select>
            </div>
        );
    }
}

OracleFormSelect.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    values: PropTypes.any,
    active: PropTypes.bool,
    onSelect: PropTypes.func,
    value: PropTypes.any
};

export default OracleFormSelect;