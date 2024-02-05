import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Components

import { LoginComponent } from './components/auth/login/login/login.component';
import { LoginGrocerComponent } from './components/auth/login/login-grocer/login-grocer.component';

import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

import { LoginCompanyComponent } from './components/auth/login/login-company/login-company.component';
import { LoginProviderComponent } from './components/auth/login/login-provider/login-provider.component';
import { LoginGoogleCompanyComponent } from './components/auth/login-google/login-google-company/login-google-company.component';
import { LoginGoogleGrocerComponent } from './components/auth/login-google/login-google-grocer/login-google-grocer.component';
import { LoginGoogleComponent } from './components/auth/login-google/login-google/login-google.component';



import { RegisterGrocerComponent } from './components/auth/register/register-grocer/register-grocer.component';
import { RegisterCompanyComponent } from './components/auth/register/register-company/register-company.component';
import { RegisterComponent } from './components/auth/register/register/register.component';

import { RegisterGrocerGoogleComponent } from './components/auth/register-google/register-grocer-google/register-grocer-google.component';
import { RegisterCompanyGoogleComponent } from './components/auth/register-google/register-company-google/register-company-google.component';
import { RegisterMainGoogleComponent } from './components/auth/register-google/register-main/register-main-google.component';


import { ViewProfileComponent } from './components/profile/view-profile/view-profile.component';
import { ViewProfileProviderComponent } from './components/profile/view-profile-provider/view-profile-provider.component';
import { ViewProfileCompanyComponent } from './components/profile/view-profile-company/view-profile-company.component';
import { ViewProfileGrocerComponent } from './components/profile/view-profile-grocer/view-profile-grocer.component';
import { DeleteDataProfileGrocerComponent } from './components/profile/delete-data-profile/delete-data-profile-grocer/delete-data-profile-grocer.component';

// Directives
import { BrokenImageDirective } from './directives/image/broken-image.directive';
import { BrokenImageProfileDirective } from './directives/image/broken-image-profile.directive';
import { OAuthModule } from 'angular-oauth2-oidc';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginGrocerComponent,
    NavComponent,
    LoginCompanyComponent,
    HomeComponent,
    PageNotFoundComponent,
    LoginProviderComponent,
    RegisterGrocerComponent,
    RegisterCompanyComponent,
    RegisterComponent,
    ViewProfileComponent,
    ViewProfileProviderComponent,
    ViewProfileCompanyComponent,
    ViewProfileGrocerComponent,
    DeleteDataProfileGrocerComponent,
    BrokenImageDirective,
    BrokenImageProfileDirective,
    RegisterGrocerGoogleComponent,
    RegisterCompanyGoogleComponent,
    RegisterMainGoogleComponent,
    LoginGoogleCompanyComponent,
    LoginGoogleGrocerComponent,
    LoginGoogleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    OAuthModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
