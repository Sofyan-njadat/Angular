import { Component } from '@angular/core';
import { ServiceService } from '../Service/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private ser: ServiceService, private router: Router) { }

  user1: any;
  onLogIn(LogIn: any) {
    const user = LogIn.value;

    this.ser.onLogIn().subscribe((data: any) => {
      this.user1 = data.find((u: any) => u.email === user.email && u.password === user.password);

      if (this.user1) {
        alert("Log in successful");
        this.router.navigate(["/home"]);
      } else {
        alert('Invalid email or password. Please try again.');
      }
    });
  }

}


