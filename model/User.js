class User {

    /**
     * Constructor
     * @param userId
     * @param firstName
     * @param lastName
     * @param email
     * @param address1
     * @param address2
     * @param city
     * @param state
     * @param zipCode
     * @param country
     */
     constructor(userId, firstName, lastName, email, address1, address2, city, state, zipCode, country) {
       this._userId = userId;
       this._firstName = firstName;
       this._lastName = lastName;
       this._email = email;
       this._address1 = address1;
       this._address2 = address2;
       this._city = city;
       this._state = state;
       this._zipCode = zipCode;
       this._country = country;
   }

   /**
    *
    * Getter and Setters
    */


   get userId() {
       return this._userId;
   }

   set userId(value) {
       this._userId = value;
   }

   get firstName() {
       return this._firstName;
   }

   set firstName(value) {
       this._firstName = value;
   }

   get lastName() {
       return this._lastName;
   }

   set lastName(value) {
       this._lastName = value;
   }

   get email() {
       return this._email;
   }

   set email(value) {
       this._email = value;
   }

   get address1() {
       return this._address1;
   }

   set address1(value) {
       this._address1 = value;
   }

   get address2() {
       return this._address2;
   }

   set address2(value) {
       this._address2 = value;
   }

   get city() {
       return this._city;
   }

   set city(value) {
       this._city = value;
   }

   get state() {
       return this._state;
   }

   set state(value) {
       this._state = value;
   }

   get zipCode() {
       return this._zipCode;
   }

   set zipCode(value) {
       this._zipCode = value;
   }

   get country() {
       return this._country;
   }

   set country(value) {
       this._country = value;
   }

   /* get userProfile(){
       return this._userProfile;
   }

   set userProfile(value){
       this._userProfile = value;
   } */

}
module.exports = User;
