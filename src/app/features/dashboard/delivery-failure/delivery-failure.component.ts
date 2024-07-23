import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { DeliveryService } from '../../../shared/services/delivery.service';
import { FailureDelivery } from '../../../shared/models/delivery-failure.model';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-delivery-failure',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule],
  providers: [DeliveryService],
  templateUrl: './delivery-failure.component.html',
  styleUrl: './delivery-failure.component.scss'
})
export class DeliveryFailureComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['motorista', 'total'];
  dataSource!: MatTableDataSource<FailureDelivery>;

  @ViewChild(MatSort) sort!: MatSort;
  
  constructor(
    private deliveryService: DeliveryService
  ) { }

  ngOnInit(): void {
    this.deliveryService.getFailureDelivery().subscribe((failure) => {
      this.dataSource = new MatTableDataSource(failure);
    });
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
}
