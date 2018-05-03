import {action, computed, observable} from 'mobx'
import express from "../data/express";

import '../styles/smart/pagination.css';

export class QuizControl {
    constructor() {
        this.load();
    }

    @observable current_step_id = 0;
    @observable steps_ids = [];
    @observable steps = [];
    @observable questions = [];
    @observable answers = [];

    @action
    load() {
        this.steps = express.steps;
        this.steps_ids = this.steps.map((item) => item.id);
        this.questions = express.questions.map((item) => {
            item.answer = false;
            return item;
        });
        this.answers = express.answers.map((item) => {
            item.active = false;
            return item;
        });
    }

    @computed
    get current_step_questions() {
        return this.questions.filter((item) => {
            return item.step_id === this.current_step_id ? item : null
        });
    }

    @computed
    get current_step_answers() {
        return this.answers.filter((item) => {
            return item.step_id === this.current_step_id ? item : null
        });
    }

    @computed
    get current_step() {
        let step = this.current_step_id === 0
            ? [{
                'id': 0,
                'type': 'category_select'
            }] : this.steps.filter((item) => { // array.reduce don't recompute property
                return item.id === this.current_step_id;
            });
        if (step.length > 0) {
            return step[0];
        }
        return null;
    }

    @action
    inputQuestion(id, value) {
        let question = this.questions.filter((item) => item.id = id);
        if (question.length) {
            question = question[0];
        } else {
            question = null;
        }
        if (question) {
            this.questions = this.questions.map((item) => {
                if (item.id === question.id) {
                    item.value = value;
                }
                return item;
            });
        }
    }

    @action
    chooseAnswer(id) {
        let answer = this.answers.filter((item) => item.id = id);
        if (answer.length) {
            answer = answer[0];
        } else {
            answer = null;
        }
        if (answer) {
            let question = this.questions.filter((item) => item.id = answer.question_id);
            if (question.length) {
                question = question[0];
            } else {
                question = null;
            }
            if (question) {
                this.answers = this.answers.map((item) => {
                    if (item.question_id === answer.question_id) {
                        item.active = false;
                    }
                    if (item.id === answer.id) {
                        item.active = true;
                    }
                    return item;
                });

                this.questions = this.questions.map((item) => {
                    if (item.id === question.id) {
                        item.value = answer.value;
                    }
                    return item;
                });
            }
        }
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