export interface IVehicle {
  id?: string;
  vehicleName?: string;
  vehicleBrand?: string | undefined | null;
  chassisNumber?: string | undefined | null;
  registrationNumber?: string | undefined | null;
  indebtedUnit?: string | undefined | null;
  vehicleType?: string | undefined | null;
  vehiclePrice?: number | undefined | null;
  manufactureYear?: number | undefined | null;
  carMileage?: number | undefined | null;
  acc?: string | undefined | null;
  nextService?: string | undefined | null;
  servicePrice?: number | undefined | null;
  registeredBy?: string | undefined | null;
  registeredUntil?: string | undefined | null;
  registrationPrice?: number | undefined | null;
  insuranceName?: string | undefined | null;
  insuranceType?: string | undefined | null;
  insuranceBy?: string | undefined | null;
  insuranceUntil?: string | undefined | null;
}

export interface IDialogConfig {
  width: string;
  height: string;
  panelClass: string;
  position?: IPosition;
}

interface IPosition {
  right: string;
}
