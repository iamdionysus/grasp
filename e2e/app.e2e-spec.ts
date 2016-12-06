import { GraspPage } from './app.po';

describe('grasp App', function() {
  let page: GraspPage;

  beforeEach(() => {
    page = new GraspPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
