import { PhotoGalleryPage } from './app.po';

describe('photo-gallery App', () => {
  let page: PhotoGalleryPage;

  beforeEach(() => {
    page = new PhotoGalleryPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
