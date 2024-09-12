public with sharing class ContactControllerApex {
    @AuraEnabled(cacheable = true)
    public static List<Contact> getRelatedContacts(String accId){
        try {
            return [SELECT Id, FirstName, LastName, Phone FROM Contact WHERE AccountId = :accId
            WITH SECURITY_ENFORCED];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

}