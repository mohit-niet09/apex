import { LightningElement, api, wire } from 'lwc';
import MyMessageChannel from '@salesforce/messageChannel/myMessageChannel__c';
import { MessageContext, subscribe, unsubscribe } from 'lightning/messageService';

export default class SubscriberComponent extends LightningElement {
    @api firstName='';
    @api lastName='';
    subscription=null;
    @wire(MessageContext) messageContext;

    connectedCallback(){
        this.handelSubscribe();
    }

    disconnectedCallback(){
        this.handelUnsubscribe();
    }

    handelSubscribe(){
        if(!this.subscription){
            this.subscription = subscribe(this.messageContext, MyMessageChannel, (parameter)=>{
                console.log(parameter);
                this.firstName = parameter.firstName;
                this.lastName = parameter.lastName;
            });
        }
    }
    handelUnsubscribe(){
        unsubscribe(this.subscription);
        this.subscription = null;
    }

}