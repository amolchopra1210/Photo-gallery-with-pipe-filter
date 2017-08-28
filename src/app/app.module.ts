import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ImageDetailComponent } from './image-detail/image-detail.component';
import { Routes, RouterModule} from '@angular/router';
import { ImageService } from './shared/image.service';
import { FilterPipe } from './shared/filter.pipe';

const routes : Routes = [
  { path : "gallery", component : GalleryComponent},
  { path : "image/:id", component : ImageDetailComponent},
  { path : "", redirectTo : "/gallery", pathMatch : "full"}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GalleryComponent,
    ImageDetailComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ImageService , FilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
