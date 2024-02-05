import { Injectable } from '@angular/core';
import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ClientService } from 'src/app/services/client/client.service';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGoogleService {

  private authenticationPromise!: Promise<Boolean>;

  constructor(private oauthService: OAuthService, private client: ClientService, public auth: AuthService) {
    this.initLogin("");
  }

  initLogin(ruta: any) {
    const config: AuthConfig = {
      issuer: 'https://accounts.google.com',
      strictDiscoveryDocumentValidation: false,
      clientId: '688827669354-4tl4pfphqpradg0vrrqar8p5aq9shb1m.apps.googleusercontent.com',
      redirectUri: window.location.origin + ruta,
      scope: 'openid profile email',
    }
    this.oauthService.configure(config);
    this.oauthService.setupAutomaticSilentRefresh();
    this.authenticationPromise = this.oauthService.loadDiscoveryDocumentAndTryLogin()
  }

  login(ruta:any) {
    this.initLogin(ruta);
    this.oauthService.initLoginFlow();
  }

  register(ruta: any) {
    this.initLogin(ruta);
    this.oauthService.initLoginFlow();
  }

  logout() {
    this.oauthService.logOut();
  }

  async waitForAuthentication(): Promise<void> {
    await this.authenticationPromise;
  }

  getProfile() {
    return this.oauthService.getIdentityClaims();
  }

  authUser(): Observable<any> {
    const tokenId = sessionStorage.getItem('id_token')
    return this.client.postRequest(`${environment.url_auth}/register/google/token`, { token: tokenId });
  }

  authLogin(): Observable<any> {
    const tokenId = sessionStorage.getItem('id_token')
    return this.client.postRequest(`${environment.url_auth}/login/google/token`, { token: tokenId });
  }

}

