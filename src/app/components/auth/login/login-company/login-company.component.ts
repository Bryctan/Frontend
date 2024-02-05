import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientService } from 'src/app/services/client/client.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { environment } from 'src/environments/environment';
import { AuthGoogleService } from '../../../../services/auth-google/auth-google.service';

@Component({
  selector: 'app-login-company',
  templateUrl: './login-company.component.html',
  styleUrls: ['./login-company.component.css']
})
export class LoginCompanyComponent {

  form: FormGroup;
  data: Object = {};

  constructor(private fb: FormBuilder, private client: ClientService, public auth: AuthService, private router: Router, private authGoogleService: AuthGoogleService) {
    this.form = this.fb.group({
      email_company: ['', [Validators.email]],
      password_company: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(40)]],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.data = {
        email_company: this.form.value.email_company,
        password_company: this.form.value.password_company,
      }

      this.client.postRequest(`${environment.url_auth}/login/company`, this.data).subscribe({
        next: (response: any) => {
          this.auth.login(response.token);
        },
        error: (error) => {
          console.log(error);
        },
        complete: () => console.log('complete'),
      });
    } else {
      console.log("Error");
    }
  }

  loginGoogle() {
    this.authGoogleService.login("/login/company");
  }
  /*
  validateAccess() {
    this.authGoogleService.authLogin().subscribe(
      {
        next: (response) => {
          console.log(response);
          
          this.client.postRequest(`${environment.url_auth}/login/google/company`).subscribe({
            next: (response: any) => {
              //this.auth.login(response.token);
              console.log(response);
              
            },
            error: (error) => {
              console.log(error);
            },
            complete: () => console.log('complete'),
          }); 
        },
        error: (error) => {
          console.log(error);
          this.logout();
        }
      }
    )
  }

  logout() {
    this.authGoogleService.logout();
  }
*/

}
