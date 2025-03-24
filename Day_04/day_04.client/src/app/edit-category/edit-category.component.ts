import { Component } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-category',
  standalone: false,
  templateUrl: './edit-category.component.html',
  styleUrl: './edit-category.component.css'
})
export class EditCategoryComponent {






  category: {
    name: string,
    description: string
  }
    = {
      name: '',
      description: ''
    };


  id: any
  cat: any


  constructor(private _ser: ServiceService, private _active: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    this.id = this._active.snapshot.paramMap.get('id');


    this._ser.getCategoryById(this.id).subscribe((data: any) => {
      this.category = data;

    });



  }

  updateCategory(form: any) {
    this.cat = form.value;
    this._ser.updateCategory(this.id, this.cat).subscribe(() => {

      alert('Category Updated Successfully');

      this.router.navigate(['/category']);
    });

  }







}
