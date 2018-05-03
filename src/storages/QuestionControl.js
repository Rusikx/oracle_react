import {observable, action, computed} from 'mobx'

export class QuestionControl {
    @observable question = [];

    @computed
    get question(){

        return '';
    }

    // @action
}


export default new QuestionControl();