import { Component } from '@angular/core';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-add-category',
  standalone: false,
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.css'
})
export class AddCategoryComponent {



  constructor(private _ser: ServiceService) { }

  addcategory(data: any) {

    let category = data.value;

    this._ser.addCategory(category).subscribe(() => {

      alert(`${category.name} category Added !`)
    });

  }

}
