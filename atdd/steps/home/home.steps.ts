
import {Given, Then, When, Before} from 'cucumber';
import {expect} from 'chai';
import {HomePage} from './home-page';


let page: HomePage;

Before(() => page = new HomePage());

Given('I am on the home page', () => page.navigateTo());

Then('I should see the home page title', async () => {
  const expectedTitle: String = 'streamsapps';
  const title: string = await page.getPageTitle();
  expect(title).to.equal(expectedTitle);
});
