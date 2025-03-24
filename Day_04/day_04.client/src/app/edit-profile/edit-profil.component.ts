import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-profil',
  standalone: false,
  templateUrl: './edit-profil.component.html',
  styleUrl: './edit-profil.component.css'
})
export class EditProfilComponent {
  constructor(private _ser: ServiceService, private _router: Router) {

  }

  @Input() user = { "id": "", "name": "", "email": "", "password": "" }

  @Output() newUser = new EventEmitter<string>();


  ngOnInit() {

  }


  popup: any;

  closeEditProfile() {
    this.popup = document.getElementById("popup");
    this.popup.style.display = "none"
  }

  updateUserInfo(dataForm: any) {

    this._ser.updateUser(this.user.id, dataForm).subscribe(() => {

      localStorage.setItem("userLoggedInId", dataForm.id);

      localStorage.setItem("userLoggedInName", dataForm.name);

      localStorage.setItem('userLoggedInEmail', dataForm.email);

      localStorage.setItem('userLoggedInPassword', dataForm.password);

      alert(`Your info is Updated Successfully.. .${dataForm.name}`)

      this.newUser.emit(dataForm);

      this.closeEditProfile();
      this._router.navigate(["/home/profile"]);

    });


  }
}
