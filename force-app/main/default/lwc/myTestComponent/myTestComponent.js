import { LightningElement, wire } from 'lwc';
import { getRecord, deleteRecord } from 'lightning/uiRecordApi';
import ACCOUNT_NAME_FIELD from '@salesforce/schema/Account.Name';
import ACCOUNT_ID_FIELD from '@salesforce/schema/Account.Id';
import ACCOUNT_PHONE_FIELD from '@salesforce/schema/Account.Phone';
import ACCOUNT_OWNER_FIELD from '@salesforce/schema/Account.Owner.Name';
const FIELDS = [ACCOUNT_NAME_FIELD, ACCOUNT_ID_FIELD, ACCOUNT_PHONE_FIELD, ACCOUNT_OWNER_FIELD];

export default class MyTestComponent extends LightningElement {
    accountName;
    accountDetail;
    accountIndustry;
    accountPhone;
    accountOwner;
    accountId;
    @wire(getRecord, { recordId: '001Ig000008Mr32IAC', fields: FIELDS })
    getAccountRecord({data,error}) {
        if(data) {
            this.accountDetail = data;
            this.accountName = data.fields.Name.value;
            this.accountId = data.fields.Id.value;
            this.accountPhone = data.fields.Phone.value;
            this.accountOwner = data.fields.Owner.displayValue;
        }else if(error){
            console.log('some error:'+error);
        }
    }
    handelDeleteAccount(){
        deleteRecord(this.accountId)
            .then(() => {
                console.log('record deleted');
                window.location.reload();
            })
            .catch(error => {
                console.log('error deleting record');
        })
    }
}
   