import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DeliveryService } from '../../shared/services/delivery.service';
import { MatInputModule } from '@angular/material/input';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatPaginator, MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { DeliveryModel } from '../../shared/models/delivery.model';
import { CommonModule } from '@angular/common';
import { MatPaginatorIntlPt } from '../../shared/utils/paginator.component';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule, MatSelectModule],
  providers: [
    DeliveryService,
    { provide: MatPaginatorIntl, useClass: MatPaginatorIntlPt },
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['motorista.nome', 'cliente_origem.nome', 'cliente_origem.bairro', 'cliente_destino.nome', 'cliente_destino.bairro', 'status_entrega'];
  dataSource!: MatTableDataSource<DeliveryModel>;
  deliveries: DeliveryModel[] = [];
  deliveriesFiltrados: DeliveryModel[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private deliveryService: DeliveryService
  ) { }

  ngOnInit(): void {
    this.deliveryService.getAll().subscribe((deliveries) => {
      this.deliveries = deliveries;
      this.deliveriesFiltrados = this.deliveries;
      this.dataSource = new MatTableDataSource(deliveries);
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  filtrarMotorista(event: Event) {
    const input = event.target as HTMLInputElement;
    const filterValue = input.value.toLowerCase();

    if (filterValue == '') {
      this.dataSource = new MatTableDataSource(this.deliveries);

      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    } else {
      this.deliveriesFiltrados = this.deliveries.filter(d =>
        d.motorista?.nome.toLowerCase().includes(filterValue)
      );

      this.dataSource = new MatTableDataSource(this.deliveriesFiltrados);

      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  }

  filtrarStatus(event: MatSelectChange) {
    const deliverySearch = this.deliveries.filter(x => x.status_entrega == event.value);
    this.dataSource = new MatTableDataSource(deliverySearch);

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
