import {types} from 'mobx-state-tree';
import QuestionModel from "./Question";
import * as QUESTIONS from './constants/questions';
import {auto, express, hypothec, pledge} from "./store";

const createQuestion = (question) => {
    const {step_id, ...data} = question;
    return QuestionModel.create({
        step: step_id,
        ...data
    });
};

const QuestionsModel = types.model({
    questions: types.array(QuestionModel)
}).actions(self => ({
    async [QUESTIONS.LOAD_CATEGORY_QUESTIONS](category) {
        let questions = [];
        if (category === 'express') {
            questions = express.questions.map(createQuestion)
        }
        if (category === 'auto') {
            questions = auto.questions.map(createQuestion)
        }
        if (category === 'pledge') {
            questions = pledge.questions.map(createQuestion)
        }
        if (category === 'hypothec') {
            questions = hypothec.questions.map(createQuestion)
        }

        if (questions.length) {
            self.questions = questions;
        }
        await setTimeout(() => {
        }, 1);
    },
    [QUESTIONS.GET_BY_ID](id) {
        return self.questions.filter(question => question.id === id).shift();
    },
    [QUESTIONS.GET_QUESTIONS_BY_STEP_ID](id) {
        return self.questions.filter(question => question.step.id === id).shift();
    }
})).views(self => ({}));

export default QuestionsModel;