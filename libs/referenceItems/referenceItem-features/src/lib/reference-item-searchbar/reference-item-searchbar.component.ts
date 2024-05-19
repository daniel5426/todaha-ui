import { Component } from '@angular/core';
import { ReferenceItemQueryModel } from '@guppy/referenceItems/domain';
import { INITIAL_QUERY, ReferenceItemSearchbarActions, selectQueryValue} from '@guppy/referenceItems/state';
import { Store, select} from '@ngrx/store';

import {  FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { ToolbarModule } from 'primeng/toolbar';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TagModule } from 'primeng/tag';
import { MenuModule } from 'primeng/menu';
import { RippleModule } from 'primeng/ripple';
import { PanelModule } from 'primeng/panel';

@Component({
  selector: 'lib-reference-item-searchbar',
  standalone: true,
  imports: [
    TranslateModule,
    FormsModule,
    ToolbarModule,
    CommonModule,
    ButtonModule,
    InputTextModule,
    TagModule,
    MenuModule,
    RippleModule,
    PanelModule
  ],
  templateUrl: './reference-item-searchbar.component.html',
  styleUrl: './reference-item-searchbar.component.scss'
})
export class ReferenceItemSearchbarComponent   {


  query:ReferenceItemQueryModel =  INITIAL_QUERY;

  constructor(private store:Store) {
    this.store.pipe(select(selectQueryValue)).subscribe((query) => {
      const item :ReferenceItemQueryModel = {...query ?? INITIAL_QUERY}
      this.query = item;
  });
  }

  clear():void {
    this.store.dispatch(ReferenceItemSearchbarActions.updateQuery({ query:{...INITIAL_QUERY} }));
  }

  search():void{
    this.store.dispatch(ReferenceItemSearchbarActions.updateQuery({ query:{...this.query}}));
  }

}
