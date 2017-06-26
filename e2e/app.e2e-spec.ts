import { GpUserPage } from './app.po';

describe('gp-user App', () => {
  let page: GpUserPage;

  beforeEach(() => {
    page = new GpUserPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
