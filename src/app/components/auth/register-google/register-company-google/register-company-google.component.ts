import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientService } from 'src/app/services/client/client.service';
import { Router } from '@angular/router';
import company from '../../../../interfaces/company';
import { environment } from 'src/environments/environment';
import { AuthGoogleService } from 'src/app/services/auth-google/auth-google.service';

@Component({
  selector: 'app-register-company-google',
  templateUrl: './register-company-google.component.html',
  styleUrls: ['./register-company-google.component.css']
})
export class RegisterCompanyGoogleComponent {

  form: FormGroup;
  company: any

  constructor(private fb: FormBuilder, private client: ClientService, private router: Router, private authGoogleService: AuthGoogleService) {
    this.form = this.fb.group({
      nit_company: ['', [Validators.required, Validators.minLength(9), Validators.maxLength(15)]],
      name_company: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(100)]],
      password_company: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(40)]],
      national_line_company: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(20)]],
      foundation_company: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(40)]],
      description_company: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(255)]]
    });
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.validateAccess();
    }, 1500);
  }

  validateAccess() {
    this.authGoogleService.authUser().subscribe(
      {
        next: (response) => {
          console.log(response);
        },
        error: (error) => {
          this.logout();
        }
      }
    )
  }

  logout() {
    this.authGoogleService.logout();
  }

  onSubmit() {
    if (this.form.valid) {
      this.company = {
        nit_company: this.form.value.nit_company,
        name_company: this.form.value.name_company,
        password_company: this.form.value.password_company,
        national_line_company: this.form.value.national_line_company,
        foundation_company: this.form.value.foundation_company,
        description_company: this.form.value.description_company,
      }

      this.client.postRequest(`${environment.url_auth}/register/google/company`, this.company).subscribe({
        next: (response) => {
          console.log(response);
          this.router.navigate(["login"]);

        },
        error: (error) => {
          console.log(error);
        },
        complete: () => console.log('complete'),
      });
    }
  }
}
