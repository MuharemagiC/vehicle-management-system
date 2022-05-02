import { Component, OnInit } from '@angular/core';
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
export class LoginFormComponent implements OnInit {
  loading: boolean = false;
  subscriptionLoading: Subscription = new Subscription();
  errorMessage: string = '';
  signInForm: FormGroup = this.formService.getLoginDefaultFormGroup();

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
  }

  ngOnInit(): void {
    this.signInForm = this.formService.getLoginFormBuilder();
  }

  async onSubmit(event: MouseEvent): Promise<any> {
    event.preventDefault();
    this.login();
  }

  get email(): AbstractControl | null {
    return this.signInForm.get('email');
  }

  get password(): AbstractControl | null {
    return this.signInForm.get('password');
  }

  async login(): Promise<any> {
    this.ui.updateLoadingForm();
    try {
      const { email, password } = this.signInForm.value;
      await this.auth.signIn(email, password);
      this.router.navigateByUrl('/dashboard');
      this.signInForm.reset();
    } catch (e: any) {
      this.errorMessage = e.message;
      setTimeout(() => {
        this.errorMessage = '';
      }, 3000);
    }
    this.ui.updateLoadingForm();
  }
}
