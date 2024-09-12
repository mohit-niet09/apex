public with sharing class FetchMyContacts {
   @AuraEnabled
    public static List<Contact> getMyContacts(Integer lim) {
        try {
        return [SELECT Id, Name,Phone, Email FROM Contact WITH SECURITY_ENFORCED Limit :lim]; 
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}