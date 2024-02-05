import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGoogleService } from 'src/app/services/auth-google/auth-google.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ClientService } from 'src/app/services/client/client.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login-google-grocer',
  templateUrl: './login-google-grocer.component.html',
  styleUrls: ['./login-google-grocer.component.css']
})
export class LoginGoogleGrocerComponent {

  constructor(private client: ClientService, private router: Router, public auth: AuthService, private authGoogleService: AuthGoogleService) {

  }

  ngOnInit(): void {
    setTimeout(() => {
      this.validateAccess();
    }, 500);
  }


  validateAccess() {
    this.authGoogleService.authLogin().subscribe(
      {
        next: (response) => {
          this.client.getRequest(`${environment.url_auth}/login/google/grocer`, undefined, undefined).subscribe({
            next: (response: any) => {
              this.auth.login(response.token);
              this.router.navigate(["/"]);
            },
            error: (error) => {
              console.log(error.error.Status);
              this.logout();
              this.router.navigate(["/register"]);
            },
            complete: () => console.log('complete'),
          });
        },
        error: (error) => {
          console.log(error);
          this.router.navigate(["/login"]);
          this.logout();
        }
      }
    )
  }




  logout() {
    this.authGoogleService.logout();

  }

}
