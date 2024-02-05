import { Router } from '@angular/router';
import { inject } from "@angular/core";
import { AuthGoogleService } from "src/app/services/auth-google/auth-google.service";

export const RegisterGoogleGuard = async () => {
    const router = inject(Router);
    const authGoogle = inject(AuthGoogleService);

    await authGoogle.waitForAuthentication();
    const profile = authGoogle.getProfile();
    console.log('Google Profile Data:', profile);

    if (profile != null) {
        return true;
    }

    router.navigate(['404']);
    return false;

}