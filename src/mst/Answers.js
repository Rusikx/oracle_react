import {types} from 'mobx-state-tree';
import AnswerModel from "./Answer";
import * as ANSWERS from './constants/answers';
import {auto, express, hypothec, pledge} from "./store";

const createAnswer = (answer) => {
    const {step_id, question_id, ...data} = answer;
    return AnswerModel.create({
        step: step_id,
        question_id,
        question: question_id,
        ...data
    });
};

const AnswersModel = types.model({
    answers: types.array(AnswerModel)
}).actions(self => ({
    async [ANSWERS.LOAD_CATEGORY_ANSWERS](category) {
        let answers = [];
        if (category === 'express') {
            answers = express.answers.map(createAnswer)
        }
        if (category === 'auto') {
            answers = auto.answers.map(createAnswer)
        }
        if (category === 'pledge') {
            answers = pledge.answers.map(createAnswer)
        }
        if (category === 'hypothec') {
            answers = hypothec.answers.map(createAnswer)
        }

        if (answers.length) {
            self.answers = answers;
        }
        await setTimeout(() => {
        }, 1);
    },
    [ANSWERS.GET_BY_ID](id) {
        return self.answers.filter(answer => answer.id === id).shift();
    },
    [ANSWERS.GET_ANSWERS_BY_QUESTION_ID](id) {
        return self.answers.filter(answer => answer.question_id === id).shift();
    }
}));


export default AnswersModel;