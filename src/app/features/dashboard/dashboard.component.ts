import { Component } from '@angular/core';
import { DeliveryProgressComponent } from "./delivery-progress/delivery-progress.component";
import { DeliveryNeighborhoodComponent } from "./delivery-neighborhood/delivery-neighborhood.component";
import { DeliveryFailureComponent } from "./delivery-failure/delivery-failure.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [DeliveryProgressComponent, DeliveryNeighborhoodComponent, DeliveryFailureComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
