import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register-main-google',
  templateUrl: './register-main-google.component.html',
  styleUrls: ['./register-main-google.component.css']
})
export class RegisterMainGoogleComponent {

  role: any;

  constructor(private router: Router, private routerActivate: ActivatedRoute) { }
  
  ngOnInit(): void { 
    this.role = this.routerActivate.snapshot.params['role'];
  }


  isRole(role: string): boolean {
    return this.role === role;
  }
  
}


