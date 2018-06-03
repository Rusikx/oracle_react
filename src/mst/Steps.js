import {types} from 'mobx-state-tree';
import StepModel from "./Step";

import * as STEPS from './constants/steps';
import {auto, express, hypothec, pledge} from "./store";

const StepsModel = types.model({
    current_step_id: types.optional(types.number, 0),
    steps: types.array(StepModel)
}).actions(self => ({
    async [STEPS.LOAD_CATEGORY_STEPS](category) {
        let add_steps = [];
        if (category === 'express') {
            add_steps = express.steps.map(item => {
                return StepModel.create(item);
            })
        }
        if (category === 'auto') {
            add_steps = auto.steps.map(item => {
                return StepModel.create(item);
            })
        }
        if (category === 'pledge') {
            add_steps = pledge.steps.map(item => {
                return StepModel.create(item);
            })
        }
        if (category === 'hypothec') {
            add_steps = hypothec.steps.map(item => {
                return StepModel.create(item);
            })
        }

        if (add_steps.length) {
            self.steps = [
                StepModel.create({
                    id: 0,
                    type: 'category'
                }),
                ...add_steps
            ]
        }
        await setTimeout(() => {
        }, 1);
    },
    [STEPS.GET_STEP_BY_ID](id) {
        return self.steps.filter(step => step.id === id).shift();
    },
    [STEPS.GO_NEXT]() {
        if (self.next && self[STEPS.GET_STEP_BY_ID](self.next.id)) {
            self.current_step_id = self.next.id;
        }
    },
    [STEPS.GO_BACK]() {
        if (self.previous && self[STEPS.GET_STEP_BY_ID](self.previous.id)) {
            self.current_step_id = self.previous.id;
        }
    }

})).views(self => ({
    get current() {
        return self.steps.filter(step => step.id === self.current_step_id).shift();
    },
    get last() {
        return self.steps[self.steps.length - 1];
    },
    get first() {
        return self.steps[0];
    },
    get previous() {
        if (self.current.id !== self.first.id) {
            let previous_id = self.current_step_id - 1;
            let previous = self[STEPS.GET_STEP_BY_ID](previous_id);

            while (
                previous === undefined
                && previous_id > 0
                ) {
                previous_id--;
                previous = self[STEPS.GET_STEP_BY_ID](previous_id);
            }

            if (previous !== undefined) {
                return previous;
            } else {
                return false;
            }
        } else {
            return false;
        }
    },
    get next() {
        if (self.current.id !== self.last.id) {
            let next_id = self.current_step_id + 1;
            let next = self[STEPS.GET_STEP_BY_ID](next_id);

            while (
                next === undefined
                && next_id > 0
                ) {
                next_id++;
                next = self[STEPS.GET_STEP_BY_ID](next_id);
            }

            if (next !== undefined) {
                return next;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }
}));


export default StepsModel;