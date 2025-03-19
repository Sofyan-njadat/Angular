import { Component } from '@angular/core';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-add-product',
  standalone: false,
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {



  selectedItem: any = "";
  constructor(private _ser: ServiceService) {

  }

  ngOnInit() {
    this.loadCategoryId();
  }

  category: any;

  loadCategoryId() {
    this._ser.categoryLoad().subscribe((data) => {
      this.category = data;

    })
  }

  dataForm: any;
  addproduct(product: any) {
    this.dataForm = product.value;

    this._ser.addProduct(this.dataForm).subscribe(() => {

      alert("Product Added .. ");
    })

  }






}
