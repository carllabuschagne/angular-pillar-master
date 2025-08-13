import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideAuth0 } from '@auth0/auth0-angular';
import { environment } from './environments/environment';

bootstrapApplication(AppComponent, {
  providers: [
    ...appConfig.providers,
    provideAuth0({
      domain: environment.auth0.authDomain,
      clientId: environment.auth0.authClientId,
      authorizationParams: {
        redirect_uri: window.location.origin,
      },
    }),
  ],
});
