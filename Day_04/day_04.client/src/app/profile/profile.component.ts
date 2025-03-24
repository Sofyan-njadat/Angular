import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: false,
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  userInfo: any = { "id": "", "name": "", "email": "", "password": "" };



  popup: any;
  constructor() { }

  ngOnInit() {

    this.userInfo.id = localStorage.getItem("userLoggedInId");

    this.userInfo.name = localStorage.getItem("userLoggedInName");
    this.userInfo.email = localStorage.getItem('userLoggedInEmail');

    this.userInfo.password = localStorage.getItem('userLoggedInPassword');
  }

  displayEdit() {
    this.popup = document.getElementById('popup');
    if (this.popup) {

      this.popup.style.display = "flex";
      this.popup.style.justifyContent = "center";
      this.popup.style.alignItems = "center";

    }
  }

  updateUser(event: any) {

    this.userInfo = event;
    alert(this.userInfo.name)
    localStorage.setItem("userLoggedInId", this.userInfo.id);

    localStorage.setItem("userLoggedInName", this.userInfo.name);

    localStorage.setItem('userLoggedInEmail', this.userInfo.email);

    localStorage.setItem('userLoggedInPassword', this.userInfo.password);
  }
}
