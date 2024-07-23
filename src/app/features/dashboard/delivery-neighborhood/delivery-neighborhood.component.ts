import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { DeliveryService } from '../../../shared/services/delivery.service';
import { NeighborhoodDelivery } from '../../../shared/models/delivery-neighborhood.model';

@Component({
  selector: 'app-delivery-neighborhood',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule],
  providers: [DeliveryService],
  templateUrl: './delivery-neighborhood.component.html',
  styleUrl: './delivery-neighborhood.component.scss'
})
export class DeliveryNeighborhoodComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['bairro', 'total', 'realizadas'];
  dataSource!: MatTableDataSource<NeighborhoodDelivery>;

  @ViewChild(MatSort) sort!: MatSort;
  
  constructor(
    private deliveryService: DeliveryService
  ) { }

  ngOnInit(): void {
    this.deliveryService.getNeighborhoodDelivery().subscribe((neighborhood) => {
      this.dataSource = new MatTableDataSource(neighborhood);
    });
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
}
