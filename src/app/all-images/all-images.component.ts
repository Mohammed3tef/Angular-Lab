import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-images',
  templateUrl: './all-images.component.html',
  styleUrls: ['./all-images.component.css']
})
export class AllImagesComponent implements OnInit {

  constructor(private http: HttpClient) { }

  images?: any[] = [];
  ngOnInit(): void {
     const promise = this.http.get<any[]>('https://jsonplaceholder.typicode.com/albums/1/photos').toPromise();
      promise.then((data)=>{
        this.images = data;
        console.log(this.images);
        console.log("Promise resolved with: " + JSON.stringify(data));
      }).catch((error)=>{
        console.log("Promise rejected with " + JSON.stringify(error));
      });
  }


}
