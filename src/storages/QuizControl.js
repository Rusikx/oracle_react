import {action, observable, computed} from 'mobx'
import express from "../data/express";

import '../styles/smart/pagination.css';

export class QuizControl {
    constructor(){
        this.loadSteps();
    }

    @observable current_step_id = 0;
    @observable steps_ids = [];
    @observable steps = [];

    @computed
    get current_step(){
        if(this.current_step_id === 0){
            return {
                'id': 0,
                'type': 'category_select'
            };
        }
        return this.steps.reduce((prev,item) =>{
            if(prev){
                return prev;
            }
            return item.id === this.current_step_id ? item : null
        });
    }

    @action
    loadSteps() {
        this.steps = express.steps;
        this.steps_ids = this.steps.map((item) => item.id);
    }

    @action
    goToNextStep() {
        if (this.current_step_id === 0) {
            this.current_step_id = this.steps_ids[0];
        } else {
            const current_step = this.steps_ids.indexOf(this.current_step_id);
            if (this.steps_ids.length > (current_step + 1)) {
                this.current_step_id = this.steps_ids[current_step + 1];
            }
        }
    }

    @action
    goToPrevStep() {
        if (this.current_step_id === this.steps_ids[0]) {
            this.current_step_id = 0;
        } else {
            const current_step = this.steps_ids.indexOf(this.current_step_id);
            if (this.steps_ids[current_step - 1] !== undefined) {
                this.current_step_id = this.steps_ids[current_step - 1];
            }
        }
    }


}

export default new QuizControl();