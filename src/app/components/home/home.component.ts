import { Component } from '@angular/core';
import { AuthGoogleService } from 'src/app/services/auth-google/auth-google.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private authGoogleService: AuthGoogleService) {

  }

  showData() {
    const data = JSON.stringify(this.authGoogleService.getProfile());
    console.log(data);
  }

  logout() {
    this.authGoogleService.logout();
  }

}
