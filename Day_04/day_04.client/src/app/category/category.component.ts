import { Component } from '@angular/core';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-category',
  standalone: false,
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {



  constructor(private _ser: ServiceService) { }

  ngOnInit() {

    this.LoadPage();
  }

  category: any;

  LoadPage() {

    this._ser.categoryLoad().subscribe((data) => {

      this.category = data;

    });
  }

}
