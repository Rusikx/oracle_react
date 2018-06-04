import {types} from 'mobx-state-tree';
import {questions} from "./store";

const StepModel = types.model({
    id: types.identifier(types.number),
    type: types.string,
    title: types.maybe(types.string)
}).views(self => ({
    get questions() {
        return questions.questions.filter(question => question.step.id === self.id);
    },
    get isComplete(){
        return self.questions.reduce(function (previous,current) {
            if(
                previous === true
                && current.answered === true
            ){
                return true;
            }
            return false;
        }, true);
    }
}));

export default StepModel;