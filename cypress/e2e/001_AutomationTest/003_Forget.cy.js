import ForgotPage from "../../support/forgetPage";

var Forgot = new ForgotPage()

describe('Test Scenerio: Forgot',()=>{
    it('Forgot User',()=>{
        Forgot.visit()
        Forgot.forgetPassword()
        Forgot.submit()
    })
})