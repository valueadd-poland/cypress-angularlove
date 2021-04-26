import {getDataTest} from '../support/get-data-test.util';

describe('login form', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  describe('email field', () => {
    it('show error when email is empty', () => {
      cy.get(getDataTest('login-email-input')).click();
      cy.get(getDataTest('login-password-input')).click();
      cy.get(getDataTest('login-email-error')).should('be.visible').contains('Email address is required');
    });

    it('show error when email is invalid', () => {
      cy.get(getDataTest('login-email-input')).type('test');
      cy.get(getDataTest('login-password-input')).click();
      cy.get(getDataTest('login-email-error')).should('be.visible').contains('Please enter a valid email address');
    });
  });

  describe('password field', () => {
    it('show error when password is empty', () => {
      cy.get(getDataTest('login-password-input')).click();
      cy.get(getDataTest('login-email-input')).click();
      cy.get(getDataTest('login-password-error')).should('be.visible').contains('Password is required');
    });
  });

  describe('remember me checkbox', () => {
    it('show remember me rules when checkbox is selected', () => {
      cy.get(getDataTest('login-remember-checkbox')).click();
      cy.get(getDataTest('login-remember-rules')).should('be.visible').contains('Lorem ipsum dolor sit amet consectetuer');
    });
    it('remember me rules should not be visible when checkbox is selected', () => {
      cy.get(getDataTest('login-remember-rules')).should('be.not.exist');
    });
  });

  describe('sign in button', () => {
    it('sign in button should be disabled when form is invalid', () => {
      cy.get(getDataTest('login-password-input')).click();
      cy.get(getDataTest('login-email-input')).click();
      cy.get(getDataTest('login-sing-in-button')).should('be.disabled');
    });

    it('sign in button should be enabled when form is valid', () => {
      cy.get(getDataTest('login-password-input')).type('test@email.com');
      cy.get(getDataTest('login-email-input')).type('test@email.com');
      cy.get(getDataTest('login-sing-in-button')).should('be.not.disabled');
    });
  });
});


