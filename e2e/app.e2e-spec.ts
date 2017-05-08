import { AngularReduxGymPage } from './app.po';

describe('angular-redux-gym App', () => {
  let page: AngularReduxGymPage;

  beforeEach(() => {
    page = new AngularReduxGymPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
