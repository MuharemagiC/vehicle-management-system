import { Injectable } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { IVehicle } from 'src/app/interfaces/global';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  constructor(private formBuilder: FormBuilder) {}

  getDefaultVehicleFormGroup(): FormGroup {
    return new FormGroup({
      vehicleName: new FormControl(''),
      vehicleBrand: new FormControl(''),
      chassisNumber: new FormControl(''),
      registrationNumber: new FormControl(''),
      indebtedUnit: new FormControl(''),
      vehicleType: new FormControl(''),
      vehiclePrice: new FormControl(0),
      manufactureYear: new FormControl(2021),
      carMileage: new FormControl(0),
      acc: new FormControl(''),
      nextService: new FormControl(''),
      servicePrice: new FormControl(0),
      registeredBy: new FormControl(''),
      registeredUntil: new FormControl(''),
      registrationPrice: new FormControl(0),
      insuranceName: new FormControl(''),
      insuranceType: new FormControl(''),
      insuranceBy: new FormControl(''),
      insuranceUntil: new FormControl(''),
    });
  }

  getVehicleFormBuilder(vehicleData?: IVehicle | null | undefined): FormGroup {
    return this.formBuilder.group({
      vehicleName: [vehicleData?.vehicleName || '', [Validators.required]],
      vehicleBrand: [vehicleData?.vehicleBrand || '', [Validators.required]],
      chassisNumber: [vehicleData?.chassisNumber || '', [Validators.required]],
      registrationNumber: [
        vehicleData?.registrationNumber || '',
        [Validators.required],
      ],
      indebtedUnit: [vehicleData?.indebtedUnit || '', [Validators.required]],
      vehicleType: [vehicleData?.vehicleType || '', [Validators.required]],
      vehiclePrice: [vehicleData?.vehiclePrice || 0, [Validators.required]],
      manufactureYear: [
        vehicleData?.manufactureYear || 2021,
        [Validators.required],
      ],
      carMileage: [vehicleData?.carMileage || 0, [Validators.required]],
      acc: [vehicleData?.acc || '', [Validators.required]],
      registeredBy: [vehicleData?.registeredBy || '', [Validators.required]],
      registeredUntil: [
        vehicleData?.registeredUntil || '',
        [Validators.required],
      ],
      registrationPrice: [
        vehicleData?.registrationPrice || 0,
        [Validators.required],
      ],
      nextService: [vehicleData?.nextService || '', [Validators.required]],
      servicePrice: [vehicleData?.servicePrice || 0, [Validators.required]],
      insuranceName: [vehicleData?.insuranceName || '', [Validators.required]],
      insuranceType: [vehicleData?.insuranceType || '', [Validators.required]],
      insuranceBy: [vehicleData?.insuranceBy || '', [Validators.required]],
      insuranceUntil: [
        vehicleData?.insuranceUntil || '',
        [Validators.required],
      ],
    });
  }

  getLoginDefaultFormGroup(): FormGroup {
    return new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
    });
  }

  getLoginFormBuilder(): FormGroup {
    return this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  getDefaultFilterFormGroup(): FormGroup {
    return new FormGroup({
      nextService: new FormControl(''),
      vehiclePrice: new FormControl(''),
      manufactureYear: new FormControl(''),
      insuranceName: new FormControl(''),
      registeredUntil: new FormControl(''),
    });
  }

  getFilterFormBuilder(): FormGroup {
    return this.formBuilder.group({
      nextService: [''],
      vehiclePrice: [''],
      manufactureYear: [''],
      insuranceName: [''],
      registeredUntil: [''],
    });
  }

  getDefaultSearchBarFormGroup(): FormGroup {
    return new FormGroup({
      vehicleName: new FormControl(''),
    });
  }

  getSearchBarFilterFormBuilder(): FormGroup {
    return this.formBuilder.group({
      vehicleName: [''],
    });
  }
}
