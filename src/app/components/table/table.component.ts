import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DialogService } from 'src/app/services/dialog/dialog.service';
import { VehicleService } from 'src/app/services/vehicle/vehicle.service';
import { IVehicle } from 'src/app/interfaces/global';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  vehicles: IVehicle[] = [];
  vehicleSubscription = new Subscription();
  displayedColumns: string[] = [
    'name',
    'registration',
    'type',
    'registeredUntil',
    'nextService',
    'servicePrice',
    'actions',
  ];
  constructor(
    private eventService: VehicleService,
    private dialogService: DialogService
  ) {
    this.vehicleSubscription = this.eventService
      .onVehicleChange()
      .subscribe((vehicles) => {
        this.vehicles = vehicles;
      });
  }

  ngOnInit(): void {
    this.eventService.fetchVehicle();
  }

  openEditDialog(id: string): void {
    this.dialogService.openEditDialog(id);
  }

  openDeleteDialog(isDeleteDialog: boolean, id: string): void {
    this.dialogService.openDeleteDialog(isDeleteDialog, id);
  }
}
