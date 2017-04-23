import { BasicLayoutPage } from './app.po';

describe('basic-layout App', function() {
  let page: BasicLayoutPage;

  beforeEach(() => {
    page = new BasicLayoutPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
