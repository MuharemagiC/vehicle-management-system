import { Injectable, EventEmitter } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  filters: any = {};
  clear = new EventEmitter();
  subject: Subject<any> = new Subject();
  subjectClear: Subject<any> = new Subject();
  constructor() {}

  storeFilters(rawValue: any): void {
    this.filters = { ...this.filters, ...this.prepareFilters(rawValue) };
    this.subject.next(this.filters);
  }

  prepareFilters(rawValue: any) {
    let filters = {};
    Object.keys(rawValue).map((filter) => {
      if (rawValue[filter] !== '') {
        filters = { ...filters, [filter]: { eq: rawValue[filter] } };
      }
    });
    return filters;
  }

  clearFilters(rawValue: any): void {
    this.filters = rawValue;
    this.subject.next(this.filters);
  }

  onFiltersChange(): Observable<any> {
    return this.subject.asObservable();
  }

  onClear(): void {
    this.clear.emit();
    this.subjectClear.next(this.clear);
  }

  onClearFilterEmmited(): Observable<any> {
    return this.subjectClear.asObservable();
  }
}
