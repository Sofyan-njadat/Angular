import { Component } from '@angular/core';
import { MyserviceService } from '../service/myservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrl: './products-details.component.css'
})
export class ProductsDetailsComponent {
  constructor(private TheService: MyserviceService, private _active: ActivatedRoute) { }
  productID: any
  dataproduct: any

  ngOnInit() {
    this.productId = this._active.snapshot.paramMap.get('id')
    this.getProductId()
  }



  productId: any
  product: any

  getProductId() {
    if (this.productId) {
      this.TheService.getProductById(this.productId).subscribe((data) => {
        this.product = data;
      })


    }

  }


  }
