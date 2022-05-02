import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui/ui.service';
import { DialogService } from 'src/app/services/dialog/dialog.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss'],
})
export class VehicleComponent implements OnInit, OnDestroy {
  showFilters: boolean = false;
  subscription: Subscription = new Subscription();

  constructor(
    private uiService: UiService,
    private dialogService: DialogService
  ) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showFilters = value));
  }

  toggleFilters(): void {
    this.uiService.toggleFilters();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    if (this.showFilters) {
      this.toggleFilters();
    }
  }

  ngOnInit(): void {
    this.showFilters = false;
  }

  openAddDialog(): void {
    this.dialogService.openAddDialog();
  }
}
