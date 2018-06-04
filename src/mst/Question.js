import {types} from 'mobx-state-tree';

import StepModel from "./Step";
import SelectOption from "./SelectOption";
import {answers} from "./store";
import {SET_VALUE} from "./constants/questions";

const Value = types.custom({
    name: 'value',
    fromSnapshot(snapshot) {
        return snapshot;
    },
    toSnapshot(value) {
        return value;
    },
    isTargetType(value) {
        return typeof value === 'string' || typeof value === 'number';
    },
    getValidationMessage() {
        return 'value must be string or integer';
    }
});

const QuestionModel = types.model({
    id: types.identifier(types.number),
    step: types.reference(types.late(() => StepModel)),
    title: types.string,
    type: types.enumeration('Type', [
        'btn_bar', 'input_question', 'form_select', 'form_input', 'form_submit'
    ]),

    name: types.maybe(types.string),
    values: types.maybe(types.array(SelectOption)),
    label: types.maybe(types.string),
    value: types.maybe(Value),
    answered: types.optional(types.boolean, false)
}).actions(self => ({
    [SET_VALUE](value) {
        self.value = value;
        self.answered = value !== null && value !== '';
    },
})).views(self => ({
    get answers() {
        return answers.answers.filter(answer => answer.question_id === self.id);
    }
}));


export default QuestionModel;