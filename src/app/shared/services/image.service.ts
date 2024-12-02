import { Injectable } from '@angular/core';

interface ImageMap {
  [key: string]: string;
}

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private images: ImageMap = {
    backgroundImage: 'https://images.pexels.com/photos/3184297/pexels-photo-3184297.jpeg',
    authenticatingPerson: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
    sunatLogo: 'https://vectorseek.com/wp-content/uploads/2023/09/Sunat-Logo-Vector.svg-.png',
    successfulLogin: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg'
  };

  constructor() { }

  getImage(imageName: string): string {
    return this.images[imageName];
  }
}