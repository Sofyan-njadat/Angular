import { Component } from '@angular/core';
import { MyserviceService } from '../service/myservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  constructor(private TheService: MyserviceService, private _active: ActivatedRoute) { }

  ngOnInit() {
    this.getDataProduct();
  }

  categoryID: any
  dataproduct: any

  getDataProduct() {
    this.categoryID = this._active.snapshot.paramMap.get('id');
    this.TheService.getproduct(this.categoryID).subscribe((data) => {
      this.dataproduct = data.filter((x: any) => x.categoryId == this.categoryID);
    })



  }
}
