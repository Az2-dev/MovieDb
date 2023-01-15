import { Component, Inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-auth-button',
    template: `
    <ng-container *ngIf="auth.isAuthenticated$ | async; else loggedOut">
      <button (click)="auth.logout({ returnTo: document.location.origin })">
          <div *ngIf="auth.user$ | async as user">
              <button mat-icon-button
                      class="nav-button-icon"
                      matTooltip="Log out"
                      (click)="auth.loginWithRedirect()">
                  {{ user.name }} Log out
              </button>
          </div>

      </button>
    </ng-container>

    <ng-template #loggedOut>
        <button mat-icon-button
                class="nav-button-icon"
                matTooltip="Log in"
                (click)="auth.loginWithRedirect()">Log in

        </button>
    </ng-template>
  `,
    styles: [".nav-button-icon { margin : 0 0.5rem}"],

})
export class AuthButtonComponent  {

    constructor(@Inject(DOCUMENT) public document: Document, public auth: AuthService) {}



}
