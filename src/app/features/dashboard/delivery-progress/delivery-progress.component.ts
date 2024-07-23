import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { DeliveryService } from '../../../shared/services/delivery.service';
import { ProgressDelivery } from '../../../shared/models/delivery-progress.model';

@Component({
  selector: 'app-delivery-progress',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule],
  providers: [DeliveryService],
  templateUrl: './delivery-progress.component.html',
  styleUrl: './delivery-progress.component.scss'
})
export class DeliveryProgressComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['motorista', 'total', 'realizado'];
  dataSource!: MatTableDataSource<ProgressDelivery>;

  @ViewChild(MatSort) sort!: MatSort;
  
  constructor(
    private deliveryService: DeliveryService
  ) { }

  ngOnInit(): void {
    this.deliveryService.getProgressDelivery().subscribe((progress) => {
      this.dataSource = new MatTableDataSource(progress);
    });
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
}
