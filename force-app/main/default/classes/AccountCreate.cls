public with sharing class AccountCreate {
    @AuraEnabled
    public static string createNewAccount(string acName, string acNum, string acPhone, string acWeb, string acDesc){
        try {
            Account act = new Account(Name=acName, Phone=acPhone, Description=acDesc, Website=acWeb, AccountNumber=acNum);
            insert act;
            if(act.Id != NULL){
                return 'success';
            }else{
                return 'error';
            }
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

}