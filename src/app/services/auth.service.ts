import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private isAuthenticated = false;
    private validEmail = 'admin@gmail.com';
    private validPassword = 'admin@123';

    constructor(private router: Router) { }

    login(email: string, password: string): boolean {
        if (email === this.validEmail && password === this.validPassword) {
            this.isAuthenticated = true;
            return true;
        } else {
            this.isAuthenticated = false;
            return false;
        }
    }

    logout() {
        this.isAuthenticated = false;
        this.router.navigate(['/login']);
    }

    isLoggedIn(): boolean {
        return this.isAuthenticated;
    }
}
