import { SimpleDemoPage } from './app.po';

describe('simple-demo App', function() {
  let page: SimpleDemoPage;

  beforeEach(() => {
    page = new SimpleDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
