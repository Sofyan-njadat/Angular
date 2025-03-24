import { Component } from '@angular/core';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-voucher',
  standalone: false,
  templateUrl: './voucher.component.html',
  styleUrl: './voucher.component.css'
})
export class VoucherComponent {
  constructor(private _ser: ServiceService) { }

  ngOnInit() {

    this.loadVoucher();
  }

  v: any;
  loadVoucher() {
    this._ser.getVoucher().subscribe((data: any) => {
      this.v = data;
    });
  }
}
