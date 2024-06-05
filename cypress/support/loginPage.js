class LoginPage {
    visit() {
      cy.visit('https://parabank.parasoft.com/parabank/index.htm');
    }
  
    username() {
      cy.get('input[name="username"]').type('abc');
    }
  
    password(password) {
      cy.get('input[name="password"]').type('abc');
    }
  
    submit() {
      cy.get('input[type="submit"]').contains('Log In').click();
    }
  }
  
  export default LoginPage;
  