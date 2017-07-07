import { NgDatepickerPopupPage } from './app.po';

describe('ng-datepicker-popup App', () => {
  let page: NgDatepickerPopupPage;

  beforeEach(() => {
    page = new NgDatepickerPopupPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
