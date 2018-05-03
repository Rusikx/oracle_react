import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react';

import quiz_control from "../../storages/QuizControl";
import CategorySelector from "./CategorySelector";

@observer
class StepsWidget extends Component {
    constructor(props){
        super(props);
    }

    render() {

        if(quiz_control.current_step_id === 0){
            return <div className='steps-widget'>
                <CategorySelector/>
            </div>
        }

        return <div className='steps-widget'>
            <div>{quiz_control.current_step_id}</div>
            <div className='steps-paginator'>
                <div className='step-btn btn-prev'
                     onClick={()=>quiz_control.goToPrevStep()}
                >Назад</div>
                <div className='step-btn btn-next'
                     onClick={()=>quiz_control.goToNextStep()}
                >Вперед</div>
            </div>
        </div>;
    }

}

export default StepsWidget;