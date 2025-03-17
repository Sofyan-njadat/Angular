import { Component } from '@angular/core';
import { ServiceService } from '../Service/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-regester',
  standalone: false,
  templateUrl: './regester.component.html',
  styleUrl: './regester.component.css'
})
export class RegesterComponent {
  constructor(private ser: ServiceService, private router: Router) { }


  ngOnInit() {

  }

  onSub(user: any) {
    const formadata = user.value
    this.ser.onSubmit(formadata).subscribe(() => { })
  }

}


