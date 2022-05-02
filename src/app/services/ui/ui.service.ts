import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private showFilters: boolean = false;
  private subject = new Subject<any>();
  private loadingForm: boolean = false;
  private subjectLoadingForm = new Subject<any>();

  constructor() {}

  toggleFilters(): void {
    this.showFilters = !this.showFilters;
    this.subject.next(this.showFilters);
  }

  onToggle(): Observable<boolean> {
    return this.subject.asObservable();
  }

  updateLoadingForm(): void {
    this.loadingForm = !this.loadingForm;
    this.subjectLoadingForm.next(this.loadingForm);
  }

  onUpdateLoadingForm(): Observable<boolean> {
    return this.subjectLoadingForm.asObservable();
  }
}
