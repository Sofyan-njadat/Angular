import { Component } from '@angular/core';
import { MyserviceService } from '../service/myservice.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {

  constructor(private TheService: MyserviceService) {


  }

  ngOnInit() {
    this.getDataCategory();
  }

  datacategory: any 
  getDataCategory() {
    
    this.TheService.getCategory().subscribe((data) => {
      this.datacategory = data;

    })
  }

}
