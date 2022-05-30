import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  imgSrc: string ="../../assets/img/istockphoto-517188688-612x612.jpg";

  constructor() { }

  ngOnInit(): void {

  }

}
