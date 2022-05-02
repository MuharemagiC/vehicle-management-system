import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { FilterService } from 'src/app/services/filter/filter.service';
import { FormService } from 'src/app/services/form/form.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit, OnDestroy {
  searchBarForm: FormGroup = this.formService.getDefaultSearchBarFormGroup();
  subscription: Subscription = new Subscription();
  constructor(
    private formService: FormService,
    private filterService: FilterService
  ) {
    this.subscription = this.filterService
      .onClearFilterEmmited()
      .subscribe(() => {
        this.searchBarForm.reset();
      });
  }

  ngOnInit(): void {
    this.searchBarForm = this.formService.getSearchBarFilterFormBuilder();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onSubmit(): void {
    this.filterService.storeFilters(this.searchBarForm.value);
  }
}
