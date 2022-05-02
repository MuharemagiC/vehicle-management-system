import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnalyticsComponent } from './components/analytics/analytics.component';
import { AuctionComponent } from './components/auction/auction.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { NotFound404Component } from './components/not-found404/not-found404.component';
import { NotauthorizedComponent } from './components/notauthorized/notauthorized.component';
import { VehicleComponent } from './components/vehicle/vehicle.component';
import { AuthGuard } from './services/authGuard/auth.guard';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'dashboard',
    children: [
      {
        path: '',
        component: VehicleComponent,
        outlet: '',
      },
      {
        path: 'auction',
        component: AuctionComponent,
        outlet: '',
      },
      {
        path: 'analytics',
        component: AnalyticsComponent,
        outlet: '',
      },
    ],
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  { path: 'notauthorized', component: NotauthorizedComponent },
  { path: '**', component: NotFound404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
