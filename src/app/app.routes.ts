import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { LoginComponent } from './components/login/login.component';
import { SettingsComponent } from './components/settings/settings.component';
    import { AuthGuard } from './auth.guard'; // Import the AuthGuard

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Default route
  { path: 'about', component: AboutComponent, canActivate: [AuthGuard] }, // Protected route
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard] }, // Protected route
  { path: 'settings', component: SettingsComponent, canActivate: [AuthGuard] }, // Protected route
  // Add more routes as needed
];
