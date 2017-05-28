import { TacoTuesPage } from './app.po';

describe('taco-tues App', function() {
  let page: TacoTuesPage;

  beforeEach(() => {
    page = new TacoTuesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
