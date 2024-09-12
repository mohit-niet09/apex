import { LightningElement, wire } from 'lwc';
import OPPORTUNITY_OBJECT from '@salesforce/schema/Opportunity';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';

import getAllRelatedContacts from '@salesforce/apex/GetRelatedContacts.getRelatedCon';

const COLUMNS = [
    {label: 'First Name', fieldName: 'FirstName'},
    {label: 'Last Name',fieldName: 'LastName'},
    {label: 'Email', fieldName: 'Email'}
]

export default class Parent extends LightningElement {
    accId;
    contactData;
    columns= COLUMNS;
    dataTypes;
    handelchildclick(event){
        this.accId = event.detail;
    }

    @wire(getAllRelatedContacts, {accId: '$accId'}) allContacts({data,error}){
        if(data){
            this.dataTypes = Object.values(data).map((fld)=>{
                console.log(fld.Id);
                let { apiName, dataType } = fld;
                return { apiName, dataType };
            })
            console.log('Data types '+ JSON.stringify(this.dataTypes));
            this.contactData = data;
        }else if(error){
            console.log(error);
        }
    }

    // @wire(getObjectInfo, { objectApiName: OPPORTUNITY_OBJECT })
    // oppInfo({ data, error }) {
    //     if (data) {
    //         console.log(Object.values(data.fields));
    //         this.dataTypes = Object.values(data.fields).map((fld) => {
                             
    //             let { apiName, dataType } = fld;
    //             return { apiName, dataType };
    //         });
    //        console.log('this.dataTypes => ', JSON.stringify(this.dataTypes));
    //     }
    // }
}
