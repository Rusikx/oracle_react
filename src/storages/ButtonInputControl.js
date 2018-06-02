import {observable, action, computed} from 'mobx'

export class ButtonInputControl {
    @observable status_active = false;

    @computed
    get buttonInputControl(){
        if(this.status_active){
            return true;
        }else{
	        return false;
        }
        return '';
    }

    @action
    actionButtonInput() {
        this.status_active = true;
    }
}


export default new ButtonInputControl();