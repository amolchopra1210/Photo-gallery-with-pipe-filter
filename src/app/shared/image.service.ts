import { Injectable } from '@angular/core';

@Injectable()
export class ImageService {
  visibleImages : any[];
  constructor() { }

  getImages(){
    return this.visibleImages = IMAGES.slice(0);
  }

  getImage(id : number){
    return IMAGES.slice(0).find(image => image.id == id);
  }

}

const IMAGES = [
    { "id" : 1 , "category" : "boats", "caption" : "View from a boat", "url" : "assets/img/boat1.jpeg"},
    { "id" : 2 , "category" : "boats", "caption" : "Voyage", "url" : "assets/img/boat2.jpeg"},
    { "id" : 3 , "category" : "boats", "caption" : "What a view!!", "url" : "assets/img/boat3.jpeg"},  
    { "id" : 4 , "category" : "boats", "caption" : "Serene", "url" : "assets/img/boat4.jpeg"},
    { "id" : 5 , "category" : "camping", "caption" : "Our first trip", "url" : "assets/img/camp1.jpeg"},
    { "id" : 6 , "category" : "camping", "caption" : "Blissful", "url" : "assets/img/camp2.jpeg"},
    { "id" : 7 , "category" : "camping", "caption" : "This is life", "url" : "assets/img/camp3.jpeg"},
    { "id" : 8 , "category" : "camping", "caption" : "Just another weekend", "url" : "assets/img/camp4.jpeg"},
    { "id" : 9 , "category" : "books", "caption" : "I wanna be a lawyer", "url" : "assets/img/book1.jpeg"},  
    { "id" : 10 , "category" : "books", "caption" : "My best friend", "url" : "assets/img/book2.jpeg"}
  ]

