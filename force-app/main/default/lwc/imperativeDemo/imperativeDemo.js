import { LightningElement } from 'lwc';
import getMyContacts from '@salesforce/apex/FetchMyContacts.getMyContacts';
const COLUMNS = [{label: 'Name', fieldName: 'Name', type: 'text'},
    {label: 'Phone', fieldName: 'Phone', type: 'Phone'},
    {label: 'Email', fieldName: 'Email', type: 'Email'} ];
export default class ImperativeDemo extends LightningElement {
    limit=4;
    conList;
    errList;
    columns = COLUMNS;
    handleChange(event){
        this.limit = event.target.value;
        this.getAllContacts();
    }
    getAllContacts(){
        getMyContacts({lim:this.limit}).then(data=>{
            this.conList = data;
        }).catch(error=>{
            this.errList = error;
        })
    }
}