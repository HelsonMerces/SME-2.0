import {Given, When, Then} from "cypress-cucumber-preprocessor/steps";


Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
  
//   it('fails to visit website 1', function () {
//     cy.visit('https://amcomtesteqa.z15.web.core.windows.net/')
//   })


Given("Logado ao Site", () => {
	cy.visit("https://amcomtesteqa.z15.web.core.windows.net/");
});


When("Preencho os Dados", () => {
	cy.get('#fname').type('Carlos')
    cy.get('#lname').type('Silva')
    cy.get('#phone').type('1176543456')
});


// And(/^Clico em Enviar$/, () => {
// 	cy.get('#form1 > .btn').click()
// });

// Then(/^Deve retornar sucesso no Envio$/, () => {
// 	return true;
// });







