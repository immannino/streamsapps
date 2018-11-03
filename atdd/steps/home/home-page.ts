import {browser, element, by} from 'protractor';

export class HomePage {

  private activeForm;

  constructor() {
    this.activeForm = element(by.id('active-form'));
  }

  navigateTo() {
    browser.ignoreSynchronization = true;
    return browser.get('/');
  }

  getPageTitle() {
    return browser.getTitle();
  }
}
