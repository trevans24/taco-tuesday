import { TacoTuesdayChangePage } from './app.po';

describe('taco-tuesday-change App', function() {
  let page: TacoTuesdayChangePage;

  beforeEach(() => {
    page = new TacoTuesdayChangePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
