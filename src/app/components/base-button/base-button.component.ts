import { Component, Input, EventEmitter, Output } from '@angular/core';

interface IRouter {
  exact: boolean;
}

@Component({
  selector: 'app-base-button',
  templateUrl: './base-button.component.html',
  styleUrls: ['./base-button.component.scss'],
})
export class BaseButtonComponent {
  @Input() imgUrl: string = '';
  @Input() buttonText: string = '';
  @Input() className: string = '';
  @Input() imgClassName: string = '';
  @Input() disabled: boolean = false;
  @Input() routerLinkActive: string = '';
  @Input() routerLinkActiveOptions: IRouter = { exact: false };
  @Output() btnClick = new EventEmitter();

  constructor() {}

  onClick(): void {
    this.btnClick.emit();
  }
}
