import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';
import { AuthGoogleService } from 'src/app/services/auth-google/auth-google.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  constructor(public auth: AuthService, private router: Router,private authGoogle:AuthGoogleService) { }

  view_profile() {
    let id = this.auth.getId();
    this.router.navigate(['profile', id]);
  }

  delete_data_profile() {
    let id = this.auth.getId();
    this.router.navigate(['delete/data/grocer', id]);
  }

  logout() {
    this.auth.logout()
    this.authGoogle.logout()
  }
}
