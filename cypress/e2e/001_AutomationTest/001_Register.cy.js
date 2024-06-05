import RegisterPage from "../../support/registerPage";

var register = new RegisterPage()

describe('Test Scenerio: Register',()=>{
    it('Register User',()=>{
        register.visit()
        register.registerForm()
        register.submit()
    })
})