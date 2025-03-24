import { Component } from '@angular/core';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-add-voucher',
  standalone: false,
  templateUrl: './add-voucher.component.html',
  styleUrl: './add-voucher.component.css'
})
export class AddVoucherComponent {
  constructor(private _ser: ServiceService) { }

  ngOnInit() {

  }

  addVoucher(dataForm: any) {

    this._ser.AddVoucher(dataForm).subscribe(() => {
      alert("Voucher Added .. .")
    });
  }
}
