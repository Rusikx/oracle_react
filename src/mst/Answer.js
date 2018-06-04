import {types} from 'mobx-state-tree';
import StepModel from "./Step";
import QuestionModel from "./Question";
import {ACTIVATE_ANSWER, DEACTIVATE_ANSWER} from "./constants/answers";
import {FILL_VALUE, FLUSH_VALUES, PREPARE_VALUE, SET_VALUE} from "./constants/questions";

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
    getValidationMessage(snapshot) {
        return 'value must be string or integer';
    }
});

const AnswerModel = types.model({
    id: types.identifier(types.number),
    step: types.reference(types.late(() => StepModel)),
    question: types.reference(types.late(() => QuestionModel)),
    question_id: types.number,
    type: types.enumeration('Type', [
        'button', 'input-button'
    ]),
    title: types.string,
    value: Value,
    active: types.optional(types.boolean, false)
}).actions(self => ({
    [FLUSH_VALUES](){
        self.question.answers.map(answer => {
            answer[DEACTIVATE_ANSWER]();
            return false;
        });
        self.question[SET_VALUE](null);
    },
    [FILL_VALUE](value) {
        self.question[SET_VALUE](value);
        self.active = true;
    },
    [PREPARE_VALUE]() {
        self[FLUSH_VALUES]();
        self.active = true;
    },
    [ACTIVATE_ANSWER]() {
        self.question.answers.map(answer => {
            answer[DEACTIVATE_ANSWER]();
            return false;
        });

        self.question[SET_VALUE](self.value);
        self.active = true;
    },
    [DEACTIVATE_ANSWER]() {
        self.question[SET_VALUE](null);
        self.active = false;
    },
})).views(self => ({}));


export default AnswerModel;