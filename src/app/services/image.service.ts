import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private images: object[] = [];
  private url: string = 'https://api.imgur.com/3/image';
  private clientId: string = 'd7d4546e4fd54c4';
  imageLink: any;
 
 
  constructor(private http:HttpClient) { }
  
  async uploadImage(imageFile: File, infoObject:{}):Promise<string>{
    let formData = new FormData();
    formData.append('image', imageFile, imageFile.name);
 
    let header = new HttpHeaders({
      "authorization": 'Client-ID '+this.clientId
    });
   
    const imageData = await this.http.post(this.url, formData, {headers:header}).toPromise();
    this.imageLink = imageData['data'].link;
    console.log(this.imageLink);
    return await this.imageLink;
    
 
  }
 
  getImages(){
    return this.imageLink;
  }
}
