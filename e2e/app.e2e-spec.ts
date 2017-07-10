import { MySampleAPPPage } from './app.po';

describe('my-sample-app App', () => {
  let page: MySampleAPPPage;

  beforeEach(() => {
    page = new MySampleAPPPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
