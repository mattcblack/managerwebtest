import { MDAManagerPage } from './app.po';

describe('mda.manager App', () => {
  let page: MDAManagerPage;

  beforeEach(() => {
    page = new MDAManagerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
