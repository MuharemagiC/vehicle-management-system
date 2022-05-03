import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UiService } from 'src/app/services/ui/ui.service';
import { FormService } from 'src/app/services/form/form.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit, OnDestroy {
  loading: boolean = false;
  user: any = {};
  subscriptionLoading: Subscription = new Subscription();
  errorMessage: string = '';
  signInForm: FormGroup = this.formService.getLoginDefaultFormGroup();
  newPasswordForm: FormGroup =
    this.formService.getNewPasswordDefaultFormGroup();
  newPasswordRequired: boolean = false;
  subscriptionNewPasswordRequired: Subscription = new Subscription();

  constructor(
    private formService: FormService,
    private auth: AuthService,
    private router: Router,
    private ui: UiService
  ) {
    this.subscriptionLoading = this.ui
      .onUpdateLoadingForm()
      .subscribe((loadingForm) => {
        this.loading = loadingForm;
      });
    this.subscriptionNewPasswordRequired = this.ui
      .onNewPasswordRequiredUpdate()
      .subscribe((value) => {
        this.newPasswordRequired = value;
      });
  }

  ngOnInit(): void {
    this.signInForm = this.formService.getLoginFormBuilder();
    this.newPasswordForm = this.formService.getNewPasswordFormBuilder();
  }

  ngOnDestroy(): void {
    this.subscriptionLoading.unsubscribe();
    this.subscriptionNewPasswordRequired.unsubscribe();
  }

  async onSubmit(event: MouseEvent): Promise<any> {
    event.preventDefault();
    if (this.newPasswordRequired) {
      this.loginNewPassword();
    } else {
      this.loginWithoutNewPassword();
    }
  }

  get email(): AbstractControl | null {
    return this.signInForm.get('email');
  }

  get password(): AbstractControl | null {
    return this.signInForm.get('password');
  }

  get newPassword(): AbstractControl | null {
    return this.newPasswordForm.get('newPassword');
  }

  async loginNewPassword(): Promise<any> {
    this.ui.updateLoadingForm();
    try {
      const { newPassword } = this.newPasswordForm.value;
      await this.auth.setNewPassword(this.user, newPassword);
      this.ui.updateNewPasswordRequired();
      this.newPasswordForm.reset();
      this.user = {};
      this.router.navigateByUrl('/dashboard');
    } catch (e: any) {
      this.errorMessage = e.message;
      setTimeout(() => {
        this.errorMessage = '';
        this.router.navigateByUrl('/');
      }, 3000);
    }
    this.ui.updateLoadingForm();
  }

  async loginWithoutNewPassword(): Promise<any> {
    this.ui.updateLoadingForm();
    try {
      const { email, password } = this.signInForm.value;
      const user = await this.auth.signIn(email, password);
      if (user.challengeName === 'NEW_PASSWORD_REQUIRED') {
        this.ui.updateNewPasswordRequired();
        this.signInForm.reset();
        this.user = user;
      } else {
        this.signInForm.reset();
        this.router.navigateByUrl('/dashboard');
      }
    } catch (e: any) {
      this.errorMessage = e.message;
      setTimeout(() => {
        this.errorMessage = '';
      }, 3000);
    }
    this.ui.updateLoadingForm();
  }
}
