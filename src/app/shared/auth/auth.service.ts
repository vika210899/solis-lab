import { Injectable, signal } from '@angular/core';
import { Permission } from './auth.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userType = signal<Permission>('admin');

  activeUserType() {
    return this.userType();
  }
}
