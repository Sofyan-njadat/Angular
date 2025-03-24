import { Component } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edie-voucher',
  standalone: false,
  templateUrl: './edie-voucher.component.html',
  styleUrl: './edie-voucher.component.css'
})
export class EdieVoucherComponent {
  constructor(private _ser: ServiceService, private _router: ActivatedRoute) {

  }
  id: any;
  ngOnInit() {
    this.id = this._router.snapshot.paramMap.get("id");
  }
  editVoucher(dataForm: any) {
    this._ser.editVoucher(this.id, dataForm).subscribe(() => {

      alert("Voucher Edited .. .")
    });
  }
}
