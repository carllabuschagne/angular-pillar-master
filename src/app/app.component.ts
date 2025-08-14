import { Component, Inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { AvatarModule } from 'primeng/avatar';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { AccordionModule } from 'primeng/accordion';
import { MenubarModule } from 'primeng/menubar';
import { OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenuModule } from 'primeng/menu';
import { CardModule } from 'primeng/card';
import { environment } from '../environments/environment';
import { Title } from '@angular/platform-browser';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ButtonModule,
    PanelModule,
    AvatarModule,
    AnimateOnScrollModule,
    AccordionModule,
    MenubarModule,
    MenuModule,
    CardModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  production = environment.production;
  apiUrl = environment.apiUrl;
  debugMode = environment.debugMode;
  title = environment.title;

  items: MenuItem[] | undefined;

  links: MenuItem[] | undefined;

  isAuhtnticated = false;

  constructor(
    private titleService: Title,
    private auth: AuthService,
    @Inject(DOCUMENT) public document: Document
  ) {
    this.titleService.setTitle(this.title);
  }

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        routerLink: '/',
      },
      {
        label: 'About',
        icon: 'pi pi-star',
        routerLink: '/about',
      },
      {
        label: 'Projects',
        icon: 'pi pi-search',
        items: [
          {
            label: 'Components',
            icon: 'pi pi-bolt',
          },
          {
            label: 'Blocks',
            icon: 'pi pi-server',
          },
          {
            label: 'UI Kit',
            icon: 'pi pi-pencil',
          },
          {
            label: 'Templates',
            icon: 'pi pi-palette',
            items: [
              {
                label: 'Apollo',
                icon: 'pi pi-palette',
              },
              {
                label: 'Ultima',
                icon: 'pi pi-palette',
              },
            ],
          },
        ],
      },
      {
        label: 'Contact',
        icon: 'pi pi-envelope',
      },
    ];

    this.links = [
      {
        label: 'Log In',
        icon: 'pi pi-star',
        command: () => this.login(),
      },
      {
        label: 'Logout',
        icon: 'pi pi-envelope',
        command: () => this.logout(),
      },
      {
        label: 'Settings',
        icon: 'pi pi-cog',
        routerLink: '/settings',
      },
    ];
  }

  logout() {
    this.auth.logout({
      logoutParams: {
        returnTo: this.document.location.origin,
      },
    });
  }

  login() {
    this.auth.loginWithRedirect();
  }
}
