import React, {Component} from 'react';
import {observer} from 'mobx-react';

import quiz_control from "../../storages/QuizControl";
import CategorySelector from "./CategorySelector";
import OracleButton from "../fields/OracleButton";

@observer
class StepsWidget extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        if (quiz_control.current_step_id === 0) {
            return <div className='steps-widget'>
                <CategorySelector/>
            </div>
        }

        return <div className='steps-widget'>
            <div>
                {quiz_control.current_step_id}
                <br/>
                <br/>
                {JSON.stringify(quiz_control.current_step_questions)}
                <br/>
                <br/>
                {JSON.stringify(quiz_control.current_step_answers)}
                <div style={{margin:'0 auto', width:'80%', padding:'20px'}}>
                <OracleButton/>
                </div>
            </div>
            <div className='steps-paginator'>
                <div className='step-btn btn-prev'
                     onClick={() => quiz_control.goToPrevStep()}
                >Назад
                </div>
                {
                    quiz_control.current_step.type !== 'form' &&
                    <div className='step-btn btn-next'
                         onClick={() => quiz_control.goToNextStep()}
                    >Вперед</div>
                }
            </div>
        </div>;
    }

}

export default StepsWidget;