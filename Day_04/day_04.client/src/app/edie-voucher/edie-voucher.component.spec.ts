import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdieVoucherComponent } from './edie-voucher.component';

describe('EdieVoucherComponent', () => {
  let component: EdieVoucherComponent;
  let fixture: ComponentFixture<EdieVoucherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EdieVoucherComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdieVoucherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
