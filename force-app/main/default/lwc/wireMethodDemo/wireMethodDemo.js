import { LightningElement, wire} from 'lwc';

import getMyContacts from '@salesforce/apex/FetchMyContacts.getMyContacts';
const COLUMNS = [
    {label: 'Id', fieldName: 'Id', type: 'text'},
    {label: 'Name', fieldName: 'Name', type: 'text'},
    {label: 'Phone', fieldName: 'Phone', type: 'Phone'},
    {label: 'Email', fieldName: 'Email', type: 'Email'}
]; 
export default class WireMethodDemo extends LightningElement {
    limit = 1;
    conList;
    errList;
    columns = COLUMNS;
    handleChange(event){
        this.limit = event.target.value;
        this.getAllContacts();
    }
connectedCallback(){
    this.getAllContacts();
}
   getAllContacts(){
    getMyContacts({lim: this.limit}).then(result => {
        this.conList = result;
    }).catch(error => {
        this.errList = error;
    })
   }
}