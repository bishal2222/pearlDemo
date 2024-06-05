class MenuPage {
    visit(){
      cy.visit('https://parabank.parasoft.com/parabank/index.htm')
    }
    
    clickMenu(){
      cy.get('body > :nth-child(1) > :nth-child(2) > :nth-child(1) > li').each(($element,index,$list)=>{
      while(index+1 < $list.length){
      cy.get(`body > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(${index+2}) > a`).then(($y)=>{
      var z = $y.attr('href')
      if($y.text() == 'Products' || $y.text() == 'Locations' ){
        cy.visit(z)
        cy.visit('https://parabank.parasoft.com/parabank/index.htm')
      }else{
        cy.wrap($y).click()
      }  
    })
    index++
  }
      })
      
  }
}
  
export default MenuPage;
  