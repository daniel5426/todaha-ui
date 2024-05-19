import { NavigationEnd, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  HostBinding,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';

import { InputTextModule } from 'primeng/inputtext';
import { TooltipModule } from 'primeng/tooltip';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
import { BadgeModule } from 'primeng/badge';
import { StyleClassModule } from 'primeng/styleclass';
import { Observable, filter } from 'rxjs';
import { RouterModule } from '@angular/router';
import {
  LayoutComponentActions,
  LayoutState,
  selectLayoutState,
} from '@guppy/layout/layout-state';
import { Store, select } from '@ngrx/store';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: '[lib-menu-item]',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    TooltipModule,
    RippleModule,
    ButtonModule,
    BadgeModule,
    StyleClassModule,
    InputTextModule
  ],
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.scss',
  animations: [
    trigger('children', [
      state(
        'collapsed',
        style({
          height: '0',
        })
      ),
      state(
        'expanded',
        style({
          height: '*',
        })
      ),
      state(
        'hidden',
        style({
          display: 'none',
        })
      ),
      state(
        'visible',
        style({
          display: 'block',
        })
      ),
      transition(
        'collapsed <=> expanded',
        animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')
      ),
    ]),
  ],
})
export class MenuItemComponent implements OnInit {
  @Input() item: any;
  @Input() index!: number;
  @Input() @HostBinding('class.layout-root-menuitem') root!: boolean;
  @Input() parentKey!: string;

  @ViewChild('submenu') submenu!: ElementRef;

  layoutState$: Observable<LayoutState>;
  active = false;
  key = '';

  constructor(public router: Router, private store: Store) {
    this.layoutState$ = this.store.pipe(select(selectLayoutState));
    this.layoutState$.subscribe((data) => {
      if (data.menuItemActivedKey) {
        this.active =
          data.menuItemActivedKey === this.key ||
          data.menuItemActivedKey.startsWith(this.key + '-')
            ? true
            : false;
      } else {
        if (
          data.menuItemActivedKey !== this.key &&
          !data.menuItemActivedKey.startsWith(this.key + '-')
        ) {
          this.active = false;
        }
      }
    });

    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((params) => {
        if (this.item.routerLink) {
          this.updateActiveStateFromRoute();
        }
      });
  }

  ngOnInit() {
    this.key = this.parentKey
      ? this.parentKey + '-' + this.index
      : String(this.index);

    if (this.item.routerLink) {
      this.updateActiveStateFromRoute();
    }
  }

  updateActiveStateFromRoute() {
    const activeRoute = this.router.isActive(this.item.routerLink[0], {
      paths: 'exact',
      queryParams: 'ignored',
      matrixParams: 'ignored',
      fragment: 'ignored',
    });

    if (activeRoute) {
      //this.menuService.onMenuStateChange({ key: this.key, routeEvent: true });
    }
  }


  @HostBinding('class.active-menuitem')
  get activeClass() {
    return this.active && !this.root;
  }

  get submenuAnimation() {
    return this.root ? 'expanded' : this.active ? 'expanded' : 'collapsed';
  }

  itemClick(event: Event) {
    if (this.item.disabled) {
      event.preventDefault();
      return;
    }
  }

  onMouseEnter() {
    this.active = true;
    this.store.dispatch(
      LayoutComponentActions.onMouseOverMenuItem({ key: this.key })
    );
  }
}
