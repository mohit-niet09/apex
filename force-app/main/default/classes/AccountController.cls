public with sharing class AccountController {
  @AuraEnabled(cacheable=true)
  public static List<Account> getAllActiveAccounts() {
    try {
      return [SELECT Id, Name, AccountNumber, Website, Phone, Description FROM Account with SECURITY_ENFORCED ORDER BY createddate DESC];
    } catch (Exception e) {
      throw new AuraHandledException(e.getMessage());
    }
  }



  @AuraEnabled
  public static List<Account> deleteAccount(List<string> accIds){
    List<Account> delAccList = new List<Account>();
    List<Account> accList = [SELECT Id FROM Account WHERE Id IN : accIds];
    for(Account acc: accList){
      delAccList.add(acc);
    }
    try {
      delete delAccList;
    } catch (Exception e) {
      throw new AuraHandledException(e.getMessage());
    }
    return getAllActiveAccounts();
  }
}