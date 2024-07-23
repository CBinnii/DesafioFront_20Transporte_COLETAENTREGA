import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListComponent } from './list.component';
import { DeliveryService } from '../../shared/services/delivery.service';
import { of } from 'rxjs';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { DeliveryModel } from '../../shared/models/delivery.model';
import { MatPaginatorIntlPt } from '../../shared/utils/paginator.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  let deliveryService: DeliveryService;
  
  const deliveriesMock: DeliveryModel[] = [
    { id: '1', documento: '12134565609', motorista: {  nome: 'João Silva' }, cliente_origem: { nome: 'Origem 1',  endereco: "Rua dos Pinheiros, 789", bairro: 'Bairro 1', cidade: "São Paulo" }, cliente_destino: {  nome: 'Destino 1',  endereco: "Rua dos Pinheiros, 789", bairro: 'Bairro 2', cidade: "São Paulo" }, status_entrega: 'Pendente' },
    { id: '2', documento: '23155867716', motorista: { nome: 'Maria Souza' }, cliente_origem: { nome: 'Origem 2', endereco: "Rua das Palmas, 789", bairro: 'Bairro 3', cidade: "São Paulo" }, cliente_destino: { nome: 'Destino 2', endereco: "Rua dos Coqueiros, 739", bairro: 'Bairro 4', cidade: "São Paulo" }, status_entrega: 'Entregue' }
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        MatFormFieldModule,
        MatInputModule,
        MatTableModule,
        MatSortModule,
        MatPaginatorModule,
        MatSelectModule,
        BrowserAnimationsModule,
        NoopAnimationsModule,
        ListComponent,
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers: [
        { provide: DeliveryService, useValue: { getAll: () => of(deliveriesMock) } },
        { provide: MatPaginatorIntl, useClass: MatPaginatorIntlPt }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    deliveryService = TestBed.inject(DeliveryService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should filter deliveries by motorista name', () => {
    component.deliveries = deliveriesMock;
    component.deliveriesFiltrados = deliveriesMock;
    component.dataSource = new MatTableDataSource(component.deliveries);

    const inputEvent = new KeyboardEvent('keyup', {
      bubbles: true, cancelable: true, key: 'a'
    });

    const inputElement = fixture.nativeElement.querySelector('input');
    inputElement.value = 'joão';
    inputElement.dispatchEvent(inputEvent);
    fixture.detectChanges();

    expect(component.dataSource.data.length).toBe(1);
    expect(component.dataSource.data[0].motorista?.nome).toBe('João Silva');
  });

  it('should reset filter if input is empty', () => {
    component.deliveries = deliveriesMock;
    component.deliveriesFiltrados = deliveriesMock;
    component.dataSource = new MatTableDataSource(component.deliveries);

    const inputEvent = new KeyboardEvent('keyup', {
      bubbles: true, cancelable: true, key: 'a'
    });

    const inputElement = fixture.nativeElement.querySelector('input');
    inputElement.value = '';
    inputElement.dispatchEvent(inputEvent);
    fixture.detectChanges();

    expect(component.dataSource.data.length).toBe(2);
  });
});