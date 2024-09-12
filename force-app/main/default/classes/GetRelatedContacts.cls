public with sharing class GetRelatedContacts {
    @AuraEnabled(cacheable=true)
    public static List<Contact> getRelatedCon(String accId){
        try{
            return [SELECT Id, FirstName, LastName, Email FROM Contact Where AccountId = :accId
            WITH SECURITY_ENFORCED];
        }catch(Exception e){
            throw new AuraHandledException(e.getMessage());
        }
       
    }
}