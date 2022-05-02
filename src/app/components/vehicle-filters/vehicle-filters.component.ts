import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { FilterService } from 'src/app/services/filter/filter.service';
import { FormService } from 'src/app/services/form/form.service';
import { UiService } from 'src/app/services/ui/ui.service';

@Component({
  selector: 'app-vehicle-filters',
  templateUrl: './vehicle-filters.component.html',
  styleUrls: ['./vehicle-filters.component.scss'],
})
export class VehicleFiltersComponent implements OnInit, OnDestroy {
  showFilters: boolean = false;
  subscription: Subscription = new Subscription();
  filterForm: FormGroup = this.formService.getDefaultFilterFormGroup();

  constructor(
    private uiService: UiService,
    private formService: FormService,
    private filterService: FilterService
  ) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showFilters = value));
  }

  ngOnInit(): void {
    this.showFilters = false;
    this.filterForm = this.formService.getFilterFormBuilder();
  }

  toggleFilters(): void {
    this.uiService.toggleFilters();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onSubmit(): void {
    this.filterService.storeFilters(this.filterForm.value);
  }

  clearFilters(): void {
    this.filterService.onClear();
    this.filterService.clearFilters({});
    this.filterForm.reset({
      nextService: '',
      vehiclePrice: '',
      manufactureYear: '',
      insuranceName: '',
      registeredUntil: '',
    });
  }
}
