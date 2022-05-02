import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { APIService } from 'src/app/services/api/API.service';
import { VehicleService } from 'src/app/services/vehicle/vehicle.service';
import { FormService } from 'src/app/services/form/form.service';

@Component({
  selector: 'app-vehicle-form',
  templateUrl: './vehicle-form.component.html',
  styleUrls: ['./vehicle-form.component.scss'],
})
export class VehicleFormComponent implements OnInit {
  vehicleForm: FormGroup = this.formService.getDefaultVehicleFormGroup();
  @Input() id: string | undefined = '';
  constructor(
    private formService: FormService,
    private eventService: VehicleService,
    private api: APIService
  ) {}

  ngOnInit(): void {
    this.populateForm();
  }

  submitForm(event: SubmitEvent): void {
    event.preventDefault();
    if (this.id) {
      this.eventService.updateEmmiter.emit({
        ...this.vehicleForm.value,
        id: this.id,
      });
    } else {
      this.eventService.addEmmiter.emit(this.vehicleForm.value);
    }
  }

  populateForm(): void {
    if (this.id) {
      this.api.GetVehicle(this.id).then((res) => {
        this.vehicleForm = this.formService.getVehicleFormBuilder(res);
      });
    } else {
      this.vehicleForm = this.formService.getVehicleFormBuilder();
    }
  }
}
