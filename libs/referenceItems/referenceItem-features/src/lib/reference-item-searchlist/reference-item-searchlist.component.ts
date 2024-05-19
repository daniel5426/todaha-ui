import { Component, OnInit,  inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BlockUIModule } from 'primeng/blockui';
import { SidebarModule } from 'primeng/sidebar';
import { RippleModule } from 'primeng/ripple';
import { ToastModule } from 'primeng/toast';
import { StyleClassModule } from 'primeng/styleclass';
import { ReferenceItemDetailComponent } from '../reference-item-detail/reference-item-detail.component';
import { ReferenceItemSearchbarComponent } from '../reference-item-searchbar/reference-item-searchbar.component';
import { ReferenceItemListComponent } from '../reference-item-list/reference-item-list.component';
import { ReferenceItemToolbarComponent} from '../reference-item-toolbar/reference-item-toolbar.component';
import { Store, select } from '@ngrx/store';
import { INITIAL_QUERY, ReferenceItemDetailActions, ReferenceItemSearchListActions, ReferenceItemSearchbarActions, selectEditModeValue, selectLoadingValue, selectMessageValue, selectTitleValue } from '@guppy/referenceItems/state';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { PanelModule }from 'primeng/panel';
import { TranslateModule } from '@ngx-translate/core';
@Component({
  selector: 'lib-reference-item-searchlist',
  standalone: true,
  imports: [
    FormsModule,
    TranslateModule,
    CommonModule,
    ReferenceItemDetailComponent,
    ReferenceItemSearchbarComponent,
    ReferenceItemListComponent,
    ReferenceItemToolbarComponent,
    BlockUIModule,
    SidebarModule,
    RippleModule,
    StyleClassModule,
    ToastModule,
    PanelModule
  ],

  templateUrl: './reference-item-searchlist.component.html',
  styleUrl: './reference-item-searchlist.component.scss',
})
export class ReferenceItemSearchlistComponent implements OnInit {
  sideBarVisible = false;
  loading = false;
  editMode = '';
  title = '';

  constructor(
    private store: Store,
    private route: ActivatedRoute,
    private messageService: MessageService
  ) {
    this.store.pipe(select(selectLoadingValue)).subscribe((loading) => {
      this.loading = loading;
    });

    this.store.pipe(select(selectEditModeValue)).subscribe((editMode) => {
      this.editMode = editMode ?? '';
      this.sideBarVisible = !(this.editMode == null || this.editMode == '');
    });

    this.store.pipe(select(selectMessageValue)).subscribe((message) => {
      console.log(message);
      console.log('hi');
      if (message != null) {
        this.messageService.add({
          severity: message.severity,
          summary: message.summary,
          detail: message.detail,
          life: 10000,
        });
      }
    });

    this.store.pipe(select(selectTitleValue)).subscribe((title) => {
      if (title != null) this.title = title;
    });
  }

  get visibility(): boolean {
    return this.sideBarVisible;
  }

  set visibility(value: boolean) {
    if (!value && value != this.sideBarVisible)
      this.store.dispatch(
        ReferenceItemDetailActions.cancel()
      );

  }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const referenceItemRoute = String(params.get('referenceItemRoute'));
      const title = String(params.get('title'));
      this.store.dispatch(
        ReferenceItemSearchListActions.initialize({
          referenceItemRoute: referenceItemRoute,
          title: title,
        })
      );
      this.store.dispatch(
        ReferenceItemSearchbarActions.updateQuery({
          query: INITIAL_QUERY,
        })
      );
    });
  }
}
