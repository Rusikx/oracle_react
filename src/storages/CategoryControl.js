import {observable, action, computed} from 'mobx'

export class CategoryControl {
    @observable show_express = false;
    @observable show_auto = false;
    @observable show_pledge = false;
    @observable show_hypothec = false;

    @computed
    get category(){
        if(this.show_express){
            return 'express';
        }
        if(this.show_auto){
            return 'auto';
        }
        if(this.show_pledge){
            return 'pledge';
        }
        if(this.show_hypothec){
            return 'hypothec';
        }

        return '';
    }

    @action
    hideAll() {
        this.show_express = false;
        this.show_auto = false;
        this.show_pledge = false;
        this.show_hypothec = false;
    }

    @action
    showExpress() {
        this.hideAll();
        this.show_express = true;
    }

    @action
    showAuto() {
        this.hideAll();
        this.show_auto = true;
    }

    @action
    showPledge() {
        this.hideAll();
        this.show_pledge = true;
    }

    @action
    showHypothec() {
        this.hideAll();
        this.show_hypothec = true;
    }


}


export default new CategoryControl();