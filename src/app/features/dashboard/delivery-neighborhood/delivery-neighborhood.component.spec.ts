import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeliveryNeighborhoodComponent } from './delivery-neighborhood.component';
import { DeliveryService } from '../../../shared/services/delivery.service';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { of } from 'rxjs';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NeighborhoodDelivery } from '../../../shared/models/delivery-neighborhood.model';
import { RouterTestingModule } from '@angular/router/testing';

describe('DeliveryNeighborhoodComponent', () => {
  let component: DeliveryNeighborhoodComponent;
  let fixture: ComponentFixture<DeliveryNeighborhoodComponent>;
  let deliveryService: DeliveryService;

  const neighborhoodDeliveryMock: NeighborhoodDelivery[] = [
    {
        bairro: "Liberdade",
        total: 6,
        realizadas: 2
    },
    {
        bairro: "Jardins",
        total: 6,
        realizadas: 2
    },
    {
        bairro: "Jardim Paulista",
        total: 6,
        realizadas: 2
    },
    {
        bairro: "Centro",
        total: 6,
        realizadas: 2
    },
    {
        bairro: "Moema",
        total: 6,
        realizadas: 3
    },
    {
        bairro: "Consolação",
        total: 5,
        realizadas: 3
    },
    {
        bairro: "Bela Vista",
        total: 5,
        realizadas: 2
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
        DeliveryNeighborhoodComponent,
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers: [
        { provide: DeliveryService, useValue: { getNeighborhoodDelivery: () => of(neighborhoodDeliveryMock) } }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryNeighborhoodComponent);
    component = fixture.componentInstance;
    deliveryService = TestBed.inject(DeliveryService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set dataSource with neighborhood data from the service', () => {
    component.ngOnInit();
    fixture.detectChanges();
    
    expect(component.dataSource).toBeDefined();
    expect(component.dataSource.data.length).toBe(7);
    expect(component.dataSource.data.map(data => ({ ...data }))).toEqual(neighborhoodDeliveryMock);
  });

  it('should set the sort after view init', () => {
    component.ngAfterViewInit();
    expect(component.dataSource.sort).toBe(component.sort);
  });
});
