import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UiService } from 'src/app/services/ui/ui.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  newPasswordRequired: boolean = false;
  subscription: Subscription = new Subscription();

  constructor(
    private auth: AuthService,
    private router: Router,
    private ui: UiService
  ) {
    this.subscription = this.ui
      .onNewPasswordRequiredUpdate()
      .subscribe((value) => {
        this.newPasswordRequired = value;
      });
  }

  ngOnInit(): void {
    this.isUserLoggedIn();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  async isUserLoggedIn(): Promise<any> {
    const isAuthenticated = await this.auth.isLoggedIn();
    if (isAuthenticated) {
      this.router.navigateByUrl('/dashboard');
    }
  }
}
