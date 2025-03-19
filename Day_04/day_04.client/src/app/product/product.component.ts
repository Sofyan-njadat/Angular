import { Component } from '@angular/core';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-product',
  standalone: false,
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {



  constructor(private _ser: ServiceService) {


  }
  ngOnInit() {
    this.LoadProduct();
  }

  Products: any;
  LoadProduct() {

    this._ser.LoadProducts().subscribe((data) => {
      this.Products = data;
    });
  }

}
