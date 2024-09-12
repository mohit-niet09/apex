import { LightningElement, api, wire} from 'lwc';
import MyMessageChannel from '@salesforce/messageChannel/myMessageChannel__c';

import { MessageContext, publish } from 'lightning/messageService';

export default class PublisherComponent extends LightningElement {
    @api fName = '';
    @api lName;

   @wire(MessageContext) messageContext;
    
   handelChange(event){
        let field  = event.target.name;
        if(field ==='fname')
        this.fName = event.target.value;
        else if(field ==='lname')
        this.lName = event.target.value;
    }
    @api calculateAge = (birthYear)=>{
        let age = new Date().getFullYear() - birthYear;
         return age;
    }

    handelClick(event){
        // code to publish the data
        let payload = {firstName: this.fName, lastName: this.calculateAge};
        publish(this.messageContext, MyMessageChannel, payload)
    }

}