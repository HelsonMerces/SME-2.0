import {Given, When, Then} from "cypress-cucumber-preprocessor/steps";




  //SPreenchimento todos os dados
  Given("Logado ao Site", ()=> {
	 cy.visit("https://amcomtesteqa.z15.web.core.windows.net/")
 
   cy.on('uncaught:exception', (err, runnable) => {

    return false
  })
  console.log('teste01')

 
});

  When("Preencho Todos os Dados Nome, Sobrenome e Telefone", ()=> {
  
	  cy.get('#fname').type('Carlos');
    cy.get('#lname').type('Silva');
    cy.get('#phone').type('1176543456');
});


And("Clico em Enviar", () => {
	cy.get('#form1 > .btn').click()
})

Then("Deve retornar sucesso no Envio", () => {
  
	cy.get('.modal-content').should('be.visible');
})




// Preenchimento Sem o Nome
Given("Logado ao Site", ()=> {
  cy.visit("https://amcomtesteqa.z15.web.core.windows.net/")

  cy.on('uncaught:exception', (err, runnable) => {

   return false
 })
 


});

 When("Preenchimento Sobrenome e Telefone", ()=> {
  console.log('teste10')

   cy.get('#lname').type('Silva');
   cy.get('#phone').type('1176543450');
});


And("Clico em Enviar", () => {
 cy.get('#form1 > .btn').click()
})

Then("Deve retornar sucesso no Envio", () => {
 console.log('teste03')
 cy.get('.modal-content').should('be.visible');
})



//Preenchimento Sem o Sobrenome

Given("Logado ao Site", ()=> {
  cy.visit("https://amcomtesteqa.z15.web.core.windows.net/")

  cy.on('uncaught:exception', (err, runnable) => {

   return false
 })
 


});

 When("Preencho apenas Nome e Telefone", ()=> {
  console.log('teste10')

  cy.get('#fname').type('Carlos');
   cy.get('#phone').type('1176543456');
});


And("Clico em Enviar", () => {
 cy.get('#form1 > .btn').click()
})

Then("Deve retornar sucesso no Envio", () => {
 console.log('teste03')
 cy.get('.modal-content').should('be.visible');
})



//Preenchimento Sem o Telefone
Given("Logado ao Site", ()=> {
  cy.visit("https://amcomtesteqa.z15.web.core.windows.net/")

  cy.on('uncaught:exception', (err, runnable) => {

   return false
 })
 


});

 When("Preencho apenas Nome e Sobrenome", ()=> {

  cy.get('#fname').type('Carlos');
  cy.get('#lname').type('Silva');
});


And("Clico em Enviar", () => {
 cy.get('#form1 > .btn').click()
})

Then("Deve retornar sucesso no Envio", () => {

 cy.get('.modal-content').should('be.visible');
})




//Enviar Sem Preencher os Dados
Given("Logado ao Site", ()=> {
  cy.visit("https://amcomtesteqa.z15.web.core.windows.net/")

  cy.on('uncaught:exception', (err, runnable) => {

   return false
 })
 


});

 When("Nao Preencho os Dados", ()=> {

});


And("Clico em Enviar", () => {
 cy.get('#form1 > .btn').click()
})

Then("Deve retornar sucesso no Envio", () => {

 cy.get('.modal-content').should('be.visible');
})




//Clicar em Saudacao
Given("Logado ao Site", ()=> {
  cy.visit("https://amcomtesteqa.z15.web.core.windows.net/")

  cy.on('uncaught:exception', (err, runnable) => {

   return false
 })
 


});

 When("Clico em Saudacao", ()=> {
  cy.get('#form3 > .btn').click()

});

Then("Deve retornar sucesso Bom dia", () => {
  cy.on('window:alert', (str)=>{
    expect(str).to.contains('Bom dia')
  })

})



//Selecionar Cor Azul
Given("Logado ao Site", ()=> {
  cy.visit("https://amcomtesteqa.z15.web.core.windows.net/")

  cy.on('uncaught:exception', (err, runnable) => {

   return false
 })
 


});

 When("Selecionar a Cor Azul", ()=> {
  cy.get('#colors').select('Azul')

});


Then("Cor de fundo deve se tornar azul", () => {
  //cy.wait (5000)
  cy.get('#card-color').should('have.css', 'background-color').and('eq', 'rgb(0, 0, 255)')
  
 
})




//Selecionar Cor Amarelo
Given("Logado ao Site", ()=> {
  cy.visit("https://amcomtesteqa.z15.web.core.windows.net/")

  cy.on('uncaught:exception', (err, runnable) => {

   return false
 })
 


});

 When("Selecionar a Cor Amarelo", ()=> {
  cy.get('#colors').select('Amarelo')

});


Then("Cor de fundo deve se tornar amarelo", () => {
  //cy.wait (5000)
  cy.get('#card-color').should('have.css', 'card-body').and('eq','rgb(255, 193, 7)')
  
})




//Selecionar Cor Vermelho
Given("Logado ao Site", ()=> {
  cy.visit("https://amcomtesteqa.z15.web.core.windows.net/")

  cy.on('uncaught:exception', (err, runnable) => {

   return false
 })
 


});

 When("Selecionar a Cor Vermelho", ()=> {
  cy.get('#colors').select('Vermelho')

});


Then("Cor de fundo deve se tornar vermelho", () => {
  //cy.wait (5000)
  cy.get('#card-color').should('have.css', 'changeBackgroundColor(this.value)').and('eq', 'rgb(220, 53, 69)')
  
})
