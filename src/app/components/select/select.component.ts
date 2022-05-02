import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { FilterService } from 'src/app/services/filter/filter.service';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent implements OnDestroy {
  vehicleType: string = '';
  subscription: Subscription = new Subscription();
  constructor(private filterService: FilterService) {
    this.subscription = this.filterService
      .onClearFilterEmmited()
      .subscribe(() => {
        this.vehicleType = '';
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onSelect(): void {
    this.filterService.storeFilters({
      vehicleType: this.vehicleType,
    });
  }
}
