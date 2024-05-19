import { MenuItemComponent } from './../menu-item/menu-item.component';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutState, selectLayoutState } from '@guppy/layout/layout-state';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'lib-menu',
  standalone: true,
  imports: [
    CommonModule,
    MenuItemComponent
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

  layoutState$: Observable<LayoutState>;
  items: MenuItem[] | undefined;
  orientation = 'horizontal';

  constructor(
    private store: Store
  ) {
    this.layoutState$ = this.store.pipe(select(selectLayoutState));
    this.layoutState$.subscribe((data) => {
      this.items = data.menuItems;
    });
  }
}
