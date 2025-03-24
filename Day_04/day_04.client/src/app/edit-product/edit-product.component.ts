import { Component } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  standalone: false,
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css'
})
export class EditProductComponent {

  constructor(private _ser: ServiceService, private _active: ActivatedRoute, private _router: Router) { }

  productId: any;
  product: any;
  category: any;
  ngOnInit() {

    this._ser.categoryLoad().subscribe((data) => {
      this.category = data;
    });

    this.productId = this._active.snapshot.paramMap.get("id");

    this._ser.getProductById(this.productId).subscribe((data) => {
      this.product = data;
    });
  }

  ProductForm: any;

  updateProduct(prod: any) {
    this.ProductForm = prod.value;
    this._ser.updateProductser(this.productId, this.ProductForm).subscribe((data) => {
      alert("Product Updated .. .");
      this._router.navigate(['/home/product']);
    });
  }

}
