import { MercurioPage } from './app.po';

describe('mercurio App', function() {
  let page: MercurioPage;

  beforeEach(() => {
    page = new MercurioPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
