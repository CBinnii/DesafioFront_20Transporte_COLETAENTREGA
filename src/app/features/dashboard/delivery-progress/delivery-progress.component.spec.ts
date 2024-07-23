import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeliveryProgressComponent } from './delivery-progress.component';
import { DeliveryService } from '../../../shared/services/delivery.service';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { of } from 'rxjs';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ProgressDelivery } from '../../../shared/models/delivery-progress.model';

describe('DeliveryProgressComponent', () => {
  let component: DeliveryProgressComponent;
  let fixture: ComponentFixture<DeliveryProgressComponent>;
  let deliveryService: DeliveryService;

  const progressDeliveryMock: ProgressDelivery[] = [
    { motorista: "Carlos Pereira", realizado: 5, total: 10 },
    { motorista: "Carla Souza", realizado: 3, total: 10 },
    { motorista: "Maria Oliveira", realizado: 3, total: 10 },
    { motorista: "João Silva", realizado: 5, total: 10 }
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatFormFieldModule,
        MatInputModule,
        MatTableModule,
        MatSortModule,
        BrowserAnimationsModule,
        NoopAnimationsModule,
        DeliveryProgressComponent,
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers: [
        { provide: DeliveryService, useValue: { getProgressDelivery: () => of(progressDeliveryMock) } }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryProgressComponent);
    component = fixture.componentInstance;
    deliveryService = TestBed.inject(DeliveryService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set dataSource with progress data from the service', () => {
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.dataSource).toBeDefined();
    expect(component.dataSource.data.length).toBe(4);
    expect(component.dataSource.data.map(data => ({ ...data }))).toEqual(progressDeliveryMock);
  });

  it('should set the sort after view init', () => {
    component.ngAfterViewInit();
    expect(component.dataSource.sort).toBe(component.sort);
  });
});
