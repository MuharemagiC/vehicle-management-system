import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { VehicleService } from 'src/app/services/vehicle/vehicle.service';

interface IModalData {
  id?: string | undefined;
  isDeleteDialog?: boolean;
}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: IModalData,
    private eventService: VehicleService
  ) {}

  get id(): string | undefined {
    return this.data?.id;
  }

  get isDeleteDialog(): boolean | undefined {
    return this.data?.isDeleteDialog;
  }

  onDeleteVehicle(): void {
    this.eventService.deleteEmmiter.emit(this.data.id);
  }
}
