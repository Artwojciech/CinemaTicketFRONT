import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentSiteComponent } from './payment-site.component';

describe('PaymentSiteComponent', () => {
  let component: PaymentSiteComponent;
  let fixture: ComponentFixture<PaymentSiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaymentSiteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
