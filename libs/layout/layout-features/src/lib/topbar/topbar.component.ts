import { Store, select } from '@ngrx/store';
import { BreadcrumbComponent } from './../breadcrumb/breadcrumb.component';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { LayoutComponentActions, LayoutState, selectLayoutState } from '@guppy/layout/layout-state';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
@Component({
  selector: 'lib-topbar',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    ButtonModule,
    InputTextModule,
    FormsModule,
    DialogModule
  ],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.scss'
})
export class TopbarComponent {

  layoutState$: Observable<LayoutState>;
  layoutState:LayoutState={} as LayoutState;

  constructor(
    private store: Store
  )
  {
    this.layoutState$ = this.store.pipe(select(selectLayoutState));
    this.layoutState$.subscribe((data) => {
      this.layoutState = data;
    });
  }

  onMenuBarToggleButtonClick()
  {
    if (this.layoutState.layout) {
      this.store.dispatch(LayoutComponentActions.onMenuBarToggleButtonClick({visible: !this.layoutState.menuBarVisible}));
    }
  }

  onProfileSideBarToggleButtonClick()
  {
    if (this.layoutState.layout) {
      this.store.dispatch(LayoutComponentActions.onProfileSideBarToggleButtonClick({visible: !this.layoutState.profileSideBarVisible}));
    }
  }
}
