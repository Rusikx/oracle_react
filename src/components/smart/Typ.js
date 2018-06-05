import React, {Component} from 'react';

import {questions} from "../../mst/store";
import {GET_ANSWERS} from "../../mst/constants/questions";

import '../../styles/smart/typ.css';

class Typ extends Component {

	constructor(props) {
		super(props);

		const key_val = [];

		questions[GET_ANSWERS]().forEach((item) => {
			key_val[item.name] = item.value;
		});

		this.state = {
			values: key_val
		}
	}

    render() {

		const {
			first_name,
			middle_name,
			last_name,
		} = this.state.values;

        return (
            <div className="typ">
                <div className="typ__content">
                    <div className="typ__title">
	                    {last_name} {first_name} {middle_name}  ваша заявка уже отправлена в банки.<br/>
                        Ждите звонка!
                    </div>
                    <div className="typ__img"></div>
                </div>
            </div>
        );
    }
}

export default Typ;