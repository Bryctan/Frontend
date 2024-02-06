import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGoogleService } from 'src/app/services/auth-google/auth-google.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ClientService } from 'src/app/services/client/client.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login-google-company',
  templateUrl: './login-google-company.component.html',
  styleUrls: ['./login-google-company.component.css']
})
export class LoginGoogleCompanyComponent {

  constructor(private client: ClientService, private router: Router, public auth: AuthService, private authGoogleService: AuthGoogleService) {

  }

  ngOnInit(): void {
    setTimeout(() => {
      this.validateAccess();
    }, 1500);
  }

  validateAccess() {
    this.authGoogleService.authLogin().subscribe(
      {
        next: (response) => {
          this.client.getRequest(`${environment.url_auth}/login/google/company`, undefined, undefined).subscribe({
            next: (response: any) => {
              this.auth.login(response.token);
              let data = this.auth.getData(this.auth.getToken()!);
              this.router.navigate(['/profile', data.id]);
            },
            error: (error) => {
              console.log(error);
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
