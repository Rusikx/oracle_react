import {types} from 'mobx-state-tree';
import StepsModel from './Steps';
import CategoryModel from "./Category";
import StepModel from "./Step";

import Express from '../data/express';
import Auto from '../data/auto';
import Pledge from '../data/pledge';
import Hypothec from '../data/hypothec';
import QuestionsModel from "./Questions";
import AnswersModel from "./Answers";

export const express = Express;
export const auto = Auto;
export const pledge = Pledge;
export const hypothec = Hypothec;

export const steps = StepsModel.create({
    steps: [
        StepModel.create({
            id: 0,
            type: 'category'
        })
    ]
});


export const category = CategoryModel.create({});

export const questions = QuestionsModel.create({
    questions: []
});

export const answers = AnswersModel.create({
    answers: []
});


const RootStore = types.model({
    steps: types.maybe(StepsModel),
    category: types.maybe(CategoryModel),
    questions: types.maybe(QuestionsModel),
    answers: types.maybe(AnswersModel)
});

const store = RootStore.create({
    steps,
    category,
    questions,
    answers
});


export default store;