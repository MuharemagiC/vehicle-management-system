import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NotFound404Component } from './components/not-found404/not-found404.component';
import {
  BrowserAnimationsModule,
  NoopAnimationsModule,
} from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { BaseButtonComponent } from './components/base-button/base-button.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NotauthorizedComponent } from './components/notauthorized/notauthorized.component';
import { AnalyticsComponent } from './components/analytics/analytics.component';
import { DashboardNavbarComponent } from './components/dashboard-navbar/dashboard-navbar.component';
import { VehicleComponent } from './components/vehicle/vehicle.component';
import { AuctionComponent } from './components/auction/auction.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SelectComponent } from './components/select/select.component';
import { VehicleFiltersComponent } from './components/vehicle-filters/vehicle-filters.component';
import { VehicleFormComponent } from './components/vehicle-form/vehicle-form.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { TableComponent } from './components/table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotFound404Component,
    BaseButtonComponent,
    LoginFormComponent,
    DashboardComponent,
    NotauthorizedComponent,
    AnalyticsComponent,
    DashboardNavbarComponent,
    VehicleComponent,
    AuctionComponent,
    SearchBarComponent,
    SelectComponent,
    VehicleFiltersComponent,
    VehicleFormComponent,
    DialogComponent,
    TableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    AmplifyAuthenticatorModule,
    ReactiveFormsModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatTableModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
