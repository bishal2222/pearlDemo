import MenuPage from "../../support/menuPage";

var menu = new MenuPage()

describe('Test Scenerio: Clicking Menu',()=>{
    it('Click Menu ',()=>{
        menu.visit()
        menu.clickMenu()
    })
})