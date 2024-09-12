public with sharing class AccountCreationController {
    @AuraEnabled
    public static string createAccounts(List<Account> accList){
        try {
            if(!accList.isEmpty()){
                insert accList;
            }
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
        return 'success';
    }
}