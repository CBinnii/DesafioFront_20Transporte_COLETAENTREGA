import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryNeighborhoodComponent } from './delivery-neighborhood.component';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('DeliveryNeighborhoodComponent', () => {
  let component: DeliveryNeighborhoodComponent;
  let fixture: ComponentFixture<DeliveryNeighborhoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeliveryNeighborhoodComponent, BrowserAnimationsModule, RouterTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeliveryNeighborhoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
