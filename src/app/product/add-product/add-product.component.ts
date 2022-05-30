import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { FormControl, FormGroup, Validators } from '@angular/forms';

import { IProduct } from '.././iprod';
import { ProdServiceService } from './../prod-service/prod-service.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  myform = new FormGroup({
    title: new FormControl('', [Validators.required ,Validators.minLength(10)]),
    description: new FormControl('', [Validators.required ,Validators.minLength(30)]) ,
    imageurl: new FormControl('', Validators.required) ,
    price: new FormControl('', Validators.required)
  }
 )
   get title() {
    return this.myform.get('title') as FormControl;
  }
  get description() {
    return this.myform.get('description') as FormControl;

  }
  get imageurl() {
    return this.myform.get('imageurl') as FormControl;
  }
  get price() {
    return this.myform.get('price') as FormControl;
  }

    add( prod: IProduct) {
    console.log(prod);
    this.prodService.post(prod);
    this.router.navigateByUrl('/product-list/')
    return
  }

  constructor(private prodService:ProdServiceService,private router:Router) { }

  ngOnInit(): void {
  }

}
