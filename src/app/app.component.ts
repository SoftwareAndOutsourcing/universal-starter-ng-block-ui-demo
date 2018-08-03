import {Component, Inject, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';
// Import BlockUI decorator & optional NgBlockUI type
import { BlockUI, NgBlockUI } from 'ng-block-ui';

@Component({
  selector: 'app-root',
  template: `
  <block-ui>
    <h1>Universal Demo using Angular and Angular CLI</h1>
    <a routerLink="/">Home</a>
    <a routerLink="/lazy">Lazy</a>
    <a routerLink="/lazy/nested">Lazy_Nested</a>
    <router-outlet></router-outlet>
  </block-ui>
  `,
  styles: []
})
export class AppComponent {
  // Decorator wires up blockUI instance
  @BlockUI() blockUI: NgBlockUI;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      this.blockUI.start('Loading...'); // Start blocking

      setTimeout(() => {
        this.blockUI.stop(); // Stop blocking
      }, 2000);
    }
  }
}
