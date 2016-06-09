export class Angular2BoilerplatePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('angular2-boilerplate-app h1')).getText();
  }
}
