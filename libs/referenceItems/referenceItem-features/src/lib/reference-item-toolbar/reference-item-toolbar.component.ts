
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { ToolbarModule } from 'primeng/toolbar';
import { Store, select } from '@ngrx/store';
import { ReferenceItemListActions, selectTitleValue } from '@guppy/referenceItems/state';

@Component({
  selector: 'lib-reference-item-toolbar',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    ButtonModule,
    RippleModule,
    ToolbarModule
  ],
  templateUrl: './reference-item-toolbar.component.html',
  styleUrl: './reference-item-toolbar.component.scss'
})
export class ReferenceItemToolbarComponent {


  constructor(private store: Store,) {

  }

  add():void {
    this.store.dispatch(ReferenceItemListActions.add());
  }

  delete():void {
    console.log('add');
  }

  export(exportType:string):void {
    console.log(exportType);
  }
}
