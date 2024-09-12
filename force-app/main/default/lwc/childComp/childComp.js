import { LightningElement, track, wire } from 'lwc';
import getRelatedContacts from '@salesforce/apex/ContactController.getRelatedContacts'
const columns = [
    {label: 'Contact Id', fieldName: 'Id'},
    {label: 'First Name', fieldName: 'FirstName',  editable: true},
    {label: 'Last Name', fieldName: 'LastName'},
    {label: 'Email', fieldName: 'Email', type:'email'},
];
export default class ChildComp extends LightningElement {
    @track columns = columns;
    @wire(getRelatedContacts) contacts;
}