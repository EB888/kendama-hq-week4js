import { KendamaClubWeek4jsPage } from './app.po';

describe('kendama-club-week4js App', () => {
  let page: KendamaClubWeek4jsPage;

  beforeEach(() => {
    page = new KendamaClubWeek4jsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
