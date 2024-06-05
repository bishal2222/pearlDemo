class ForgotPage {
    visit() {
      cy.visit('https://parabank.parasoft.com/parabank/lookup.htm');
    }
  
    forgetPassword() {
      cy.get('input[name="firstName"]').type('abc');
      cy.get('input[name="lastName"]').type('abc');
      cy.get('input[name="address.street"]').type('abc');
      cy.get('input[name="address.city"]').type('abc');
      cy.get('input[name="address.state"]').type('abc');
      cy.get('input[name="address.zipCode"]').type('abc');
      cy.get('input[name="ssn"]').type('abc');
    }
  
    submit() {
      cy.get('input[type="submit"]').contains('Find My Login Info').click();
    }
  }
  
  export default ForgotPage;
