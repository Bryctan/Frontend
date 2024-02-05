import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login-google',
  templateUrl: './login-google.component.html',
  styleUrls: ['./login-google.component.css']
})
export class LoginGoogleComponent {
  role: any;

  constructor(private router: Router, private routerActivate: ActivatedRoute) { }

  ngOnInit(): void {
    this.role = this.routerActivate.snapshot.params['role'];
  }

  isRole(role: string): boolean {
    return this.role === role;
  }
}
