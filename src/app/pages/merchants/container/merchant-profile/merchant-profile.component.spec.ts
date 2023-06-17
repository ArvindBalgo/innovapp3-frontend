import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantProfileComponent } from './merchant-profile.component';

describe('MerchantProfileComponent', () => {
  let component: MerchantProfileComponent;
  let fixture: ComponentFixture<MerchantProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MerchantProfileComponent]
    });
    fixture = TestBed.createComponent(MerchantProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
