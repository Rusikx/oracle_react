import {types} from 'mobx-state-tree';
import * as CATEGORY from './constants/category';
import {steps} from "./store";
import * as STEPS from "./constants/steps";

const categories = [
    'express',
    'auto',
    'pledge',
    'hypothec'
];

const CategoryModel = types.model({
    category: types.maybe(types.string),
}).actions(self => ({
    async [CATEGORY.SELECT_CATEGORY](category) {
        if (categories.indexOf(category) !== -1) {
            steps[STEPS.GO_NEXT]();
            self.category = category;
        } else {
            throw TypeError('invalid category');
        }
    }
}));


export default CategoryModel;