import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryFailureComponent } from './delivery-failure.component';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('DeliveryFailureComponent', () => {
  let component: DeliveryFailureComponent;
  let fixture: ComponentFixture<DeliveryFailureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeliveryFailureComponent, BrowserAnimationsModule, RouterTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeliveryFailureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
