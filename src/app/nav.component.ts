import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  template: `<mat-toolbar>
                <button mat-button routerLink='/quiz'>Quiz</button>
</mat-toolbar>`
})
export class NavComponent {
}
