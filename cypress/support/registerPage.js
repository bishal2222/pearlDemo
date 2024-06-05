class RegisterPage {
    visit() {
      cy.visit('https://parabank.parasoft.com/parabank/register.htm');
    }
  
    registerForm() {
      cy.get('input[name="customer.firstName"]').type('abc');
      cy.get('input[name="customer.lastName"]').type('abc');
      cy.get('input[name="customer.address.street"]').type('abc');
      cy.get('input[name="customer.address.city"]').type('abc');
      cy.get('input[name="customer.address.state"]').type('abc');
      cy.get('input[name="customer.address.zipCode"]').type('abc');
      cy.get('input[name="customer.phoneNumber"]').type('abc');
      cy.get('input[name="customer.ssn"]').type('abc');
      cy.get('input[name="customer.username"]').type('abc');
      cy.get('input[name="customer.password"]').type('abc');
      cy.get('input[name="repeatedPassword"]').type('abc');
    
    }
  
    submit() {
      cy.get('input[type="submit"]').contains('Register').click();
    }
  }
  
  export default RegisterPage;
  