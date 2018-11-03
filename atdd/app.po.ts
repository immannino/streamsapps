
import { browser, by, element } from 'protractor';

export class AppPage {
 navigateTo() {
    browser.ignoreSynchronization = true;
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root app-quote div p')).getText();
  }

  getPageTitle() {
    return browser.getTitle();
  }
}