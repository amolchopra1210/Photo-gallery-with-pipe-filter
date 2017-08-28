import { Component, OnChanges, Input } from '@angular/core';
import { ImageService } from '../shared/image.service';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnChanges {
  title = "Recent Photos";
  visibleImages : any[] = [];
  @Input() filterBy?: string = 'all';

  constructor(private imageService : ImageService) { 
    this.visibleImages = this.imageService.getImages();
  }

  ngOnChanges() {
    this.visibleImages = this.imageService.getImages();
  }

}
