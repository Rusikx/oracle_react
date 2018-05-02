import {observable, action} from 'mobx'

export class ViewPartsControl {
    @observable show_banner = true;
    @observable show_footer = true;
    @observable show_condition = true;

    @action
    hideBanner() {
        this.show_banner = false;
    }

    @action
    hideCondition() {
        this.show_condition = false;
    }

    @action
    hideFooter() {
        this.show_footer = false;
    }

    @action
    showBanner() {
        this.show_banner = true;
    }

    @action
    showFooter() {
        this.show_footer = true;
    }

    @action
    showCondition() {
        this.show_condition = true;
    }

    @action
    hideAll() {
        this.hideFooter();
        this.hideBanner();
        this.hideCondition();
    }

    @action
    showAll() {
        this.showFooter();
        this.showBanner();
        this.showCondition();
    }
}


export default new ViewPartsControl();