import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-dashboard-navbar',
  templateUrl: './dashboard-navbar.component.html',
  styleUrls: ['./dashboard-navbar.component.scss'],
})
export class DashboardNavbarComponent {
  currentRoute: string = '';
  constructor(private router: Router, private authService: AuthService) {}

  get isVehiclePage(): boolean {
    return (
      this.router.url === '/dashboard' ||
      this.router.url === '/dashboard/auction'
    );
  }

  signOut() {
    this.authService.signOut();
  }
}
