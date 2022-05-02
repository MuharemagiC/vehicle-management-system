import { EventEmitter, Injectable, OnDestroy } from '@angular/core';
import { Subject, Observable, Subscription } from 'rxjs';
import { APIService } from '../api/API.service';
import { DialogService } from '../dialog/dialog.service';
import { FilterService } from '../filter/filter.service';

@Injectable({
  providedIn: 'root',
})
export class VehicleService implements OnDestroy {
  private vehicles: any = [];
  private add = new EventEmitter<any>();
  private update = new EventEmitter<any>();
  private delete = new EventEmitter<any>();
  private vehicleSubject = new Subject();
  private deleteSubscription = new Subscription();
  private updateSubscription = new Subscription();
  private addSubscription = new Subscription();
  private filtersSubscription = new Subscription();

  constructor(
    private dialogService: DialogService,
    private api: APIService,
    private filterService: FilterService
  ) {
    this.onAddListener();
    this.onDeleteListener();
    this.onUpdateListener();
    this.onFiltersChangeistener();
  }

  ngOnDestroy() {
    this.addSubscription.unsubscribe();
    this.deleteSubscription.unsubscribe();
    this.updateSubscription.unsubscribe();
    this.filtersSubscription.unsubscribe();
  }

  get addEmmiter(): EventEmitter<any> {
    return this.add;
  }

  get updateEmmiter(): EventEmitter<any> {
    return this.update;
  }

  get deleteEmmiter(): EventEmitter<any> {
    return this.delete;
  }

  onUpdateListener(): void {
    this.updateSubscription = this.update.subscribe((vehicle) => {
      this.api
        .UpdateVehicle(vehicle)
        .then(() => {
          this.fetchVehicle();
        })
        .catch((e) => {
          console.log(e);
        });
    });
  }

  onAddListener(): void {
    this.deleteSubscription = this.add.subscribe((vehicle) => {
      this.api
        .CreateVehicle(vehicle)
        .then(() => {
          this.fetchVehicle();
        })
        .catch((e) => {
          console.log(e);
        });
    });
  }

  onDeleteListener(): void {
    this.deleteSubscription = this.delete.subscribe((id) => {
      this.api
        .DeleteVehicle({ id })
        .then(() => {
          this.fetchVehicle();
        })
        .catch((e) => {
          console.log(e);
        });
    });
  }

  async fetchVehicle(filters?: any): Promise<any> {
    if (filters && Object.keys(filters).length !== 0) {
      this.vehicles = (await this.api.ListVehicles(filters)).items;
      this.vehicleSubject.next(this.vehicles);
    } else {
      this.vehicles = (await this.api.ListVehicles()).items;
      this.dialogService.closeDialog();
      this.vehicleSubject.next(this.vehicles);
    }
  }

  onVehicleChange(): Observable<any> {
    return this.vehicleSubject.asObservable();
  }

  onFiltersChangeistener(): void {
    this.filtersSubscription = this.filterService
      .onFiltersChange()
      .subscribe((filters) => {
        console.log(filters);
        this.fetchVehicle(filters);
      });
  }
}
