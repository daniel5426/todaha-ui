import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ReferenceItemDetailActions, selectReadModelValue, selectEditModeValue, selectTitleValue } from '@guppy/referenceItems/state';

import { Store, select } from '@ngrx/store';

import { TranslateModule } from '@ngx-translate/core';
import { ToolbarModule } from 'primeng/toolbar';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TagModule } from 'primeng/tag';
import { MenuModule } from 'primeng/menu';
import { RippleModule } from 'primeng/ripple';
import { BadgeModule } from 'primeng/badge';
import { StyleClassModule } from 'primeng/styleclass';

import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';

import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { CheckboxModule } from 'primeng/checkbox';
import { CardModule } from 'primeng/card';

import { InternationalizedValueModelContract, ReferenceItemWriterModelContract } from '@guppy/referenceItems/openapi';
@Component({
  selector: 'lib-reference-item-detail',
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
    BadgeModule,
    StyleClassModule,
    MessageModule,
    MessagesModule,
    CheckboxModule,
    InputGroupModule,
    InputGroupAddonModule,
    CardModule
  ],
  templateUrl: './reference-item-detail.component.html',
  styleUrl: './reference-item-detail.component.scss'
})
export class ReferenceItemDetailComponent implements OnInit {


  editMode = "";
  title = "";
  model:ReferenceItemWriterModelContract={} as ReferenceItemWriterModelContract;
  submitted = false;

  constructor(
    private store: Store,
  )
  {
    this.store.pipe(select(selectReadModelValue)).subscribe((detail) => {

      if (detail !=null) {
        this.model = {
          key: detail.key as string,
          imageUrl: detail.imageUrl as string,
          properties: detail.properties,
          internationalizedValues: [] as Array<InternationalizedValueModelContract>
        }

        if (detail.internationalizedValues!=null)
          this.model.internationalizedValues = detail.internationalizedValues.map((item: InternationalizedValueModelContract) => ({...item}));
      }
    });

    this.store.pipe(select(selectTitleValue)).subscribe((title) => {
      console.log("title",title);
      if (title !=null)
        this.title = title;
    });
    this.store.pipe(select(selectEditModeValue)).subscribe((editMode) => {
      if (this.editMode != editMode)
        this.editMode = editMode ?? "";
    });


    const item  = {
      key: "",
      imageUrl: "",
      properties: {},
      internationalizedValues: [] as Array<InternationalizedValueModelContract>
    } as ReferenceItemWriterModelContract;

    item.internationalizedValues.push({ language:"FR"} as InternationalizedValueModelContract);
    item.internationalizedValues.push({ language:"EN"} as InternationalizedValueModelContract);
    this.model = item;

  }
  ngOnInit(): void {

    console.log("ReferenceItemDetailComponent ngOnInit");


  }

  validate():void {
    console.log(this.editMode);
    this.submitted = true;
    if (this.editMode=="ADD")
      this.store.dispatch(ReferenceItemDetailActions.add({writerModel:this.model}));
    else if (this.editMode=="UPDATE")
      this.store.dispatch(ReferenceItemDetailActions.update({writerModel:this.model}));
  }

  cancel():void {
    this.store.dispatch(ReferenceItemDetailActions.cancel());
    this.submitted = false;
  }


  }
