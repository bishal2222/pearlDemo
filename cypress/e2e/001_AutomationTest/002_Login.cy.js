import LoginPage from "../../support/loginPage";

var Login = new LoginPage()

describe('Test Scenerio: Login',()=>{
    it('Login User',()=>{
        Login.visit()
        Login.username()
        Login.password()
        Login.submit()
    })
})