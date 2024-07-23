import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeliveryFailureComponent } from './delivery-failure.component';
import { DeliveryService } from '../../../shared/services/delivery.service';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { of } from 'rxjs';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FailureDelivery } from '../../../shared/models/delivery-failure.model';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('DeliveryFailureComponent', () => {
  let component: DeliveryFailureComponent;
  let fixture: ComponentFixture<DeliveryFailureComponent>;
  let deliveryService: DeliveryService;

  const failureDeliveryMock: FailureDelivery[] = [
    {
      motorista: "Carlos Pereira",
      total: 1
    },
    {
      motorista: "Carla Souza",
      total: 3
    },
    {
      motorista: "Maria Oliveira",
      total: 2
    },
    {
      motorista: "João Silva",
      total: 1
    }
  ]

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatFormFieldModule,
        MatInputModule,
        MatTableModule,
        MatSortModule,
        BrowserAnimationsModule,
        NoopAnimationsModule,
        DeliveryFailureComponent,
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers: [
        { provide: DeliveryService, useValue: { getFailureDelivery: () => of(failureDeliveryMock) } }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryFailureComponent);
    component = fixture.componentInstance;
    deliveryService = TestBed.inject(DeliveryService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set dataSource with failure data from the service', () => {
    component.ngOnInit();
    fixture.detectChanges();
    
    expect(component.dataSource).toBeDefined();
    expect(component.dataSource.data.length).toBe(4);
    expect(component.dataSource.data.map(data => ({ ...data }))).toEqual(failureDeliveryMock);
  });

  it('should set the sort after view init', () => {
    component.ngAfterViewInit();
    expect(component.dataSource.sort).toBe(component.sort);
  });
});
