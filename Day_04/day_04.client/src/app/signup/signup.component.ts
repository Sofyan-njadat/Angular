import { Component } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: false,
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {



  constructor(private _ser: ServiceService, private router: Router) { }


  ngOnInit() {

  }

  signupBtn(data: any) {
    let User = data.value;
    this._ser.singUp(User).subscribe(() => {
      alert(`${User.name} signUp successful`);
    });
  }

  userChecked: any;
  signinBtn(data: any) {

    let user = data.value;
    this._ser.singIn().subscribe((d: any) => {

      this.userChecked = d.find((u: any) => u.email == user.email && u.password == user.password);

      if (this.userChecked) {
        alert("Loged in successful");
        this.router.navigate(["/home"]);

      } else {
        alert("email or password invalied");
      }

    })

  }





}
