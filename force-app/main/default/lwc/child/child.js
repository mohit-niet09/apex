import { api, LightningElement } from 'lwc';

export default class Child extends LightningElement {
    accountId;
    handelchange(event){
        this.accountId = event.target.value;
    }

    handelclick(event){
        this.dispatchEvent(new CustomEvent('childclick',{detail: this.accountId}));
    }
}