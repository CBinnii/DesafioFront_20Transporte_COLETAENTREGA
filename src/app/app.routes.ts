import { Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { ListComponent } from './features/list/list.component';

export const routes: Routes = [
    {path: '', pathMatch : 'full', redirectTo: 'dashboard'},

    {
        path: 'dashboard',
        component: DashboardComponent,
    },
    {
        path: 'list',
        component: ListComponent,
    },
];
