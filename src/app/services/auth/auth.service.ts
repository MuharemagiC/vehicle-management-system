import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import Auth from '@aws-amplify/auth';
import { CognitoUser } from 'amazon-cognito-identity-js';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loggedIn: boolean = false;

  constructor(private router: Router) {}

  isLoggedIn(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      Auth.currentAuthenticatedUser()
        .then((user: CognitoUser) => {
          resolve(true);
        })
        .catch(() => resolve(false));
    });
  }

  signIn(email: string, password: string): Promise<any> {
    return new Promise((resolve, reject) => {
      Auth.signIn(email, password)
        .then((user: any) => {
          resolve(user);
        })
        .catch((error: any) => reject(error));
    });
  }

  signOut() {
    Auth.signOut()
      .then(() => {
        console.log('success');
        this.router.navigateByUrl('/');
      })
      .catch((e) => {
        console.log(e);
      });
  }

  setNewPassword(user: any, password: string): Promise<any> {
    return new Promise((resolve, reject) => {
      Auth.completeNewPassword(user, password)
        .then((user: any) => {
          resolve(user);
        })
        .catch((error: any) => reject(error));
    });
  }
}
