
import { Component, OnInit } from '@angular/core';

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
import { DropdownModule } from 'primeng/dropdown';
import { ChallengeDefinitionQueryModel, ChallengeDefinitionStateModel, ChallengeDefinitionStateModelValues } from '@guppy/kodin/challengeDefinitions/domain';
import { ChallengeDefinitionSearchbarActions, INITIAL_QUERY, selectQueryValue } from '@guppy/kodin/challengeDefinitions/state';
import { ShareDataService } from '@guppy/tiveriad/ui';
import { ReferenceItemReaderModelContract, ReferenceItemReaderModelContractPagedResult } from '@guppy/referenceItems/openapi';

@Component({
  selector: 'lib-challenge-definition-searchbar',
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
    PanelModule,
    DropdownModule
  ],
  templateUrl: './challenge-definition-searchbar.component.html',
  styleUrl: './challenge-definition-searchbar.component.scss'
})
export class ChallengeDefinitionSearchbarComponent implements OnInit  {

  constructor(private store:Store, private referenceItemService: ShareDataService) {
    this.store.pipe(select(selectQueryValue)).subscribe((query) => {
      const item :ChallengeDefinitionQueryModel = {...query ?? INITIAL_QUERY}
      this.query = item;
  });
  }

  challengeDefinitionStateModelValues:ChallengeDefinitionStateModel[] = ChallengeDefinitionStateModelValues;

  levels: Array<ReferenceItemReaderModelContract>|undefined=[];
  skills: Array<ReferenceItemReaderModelContract>|undefined=[];

  ngOnInit(): void {
    this.referenceItemService.getAll('skills').subscribe((data) => {
      const result = data as ReferenceItemReaderModelContractPagedResult;
      this.skills = result.items ;
    });

    this.referenceItemService.getAll('levels').subscribe((data) => {
      const result = data as ReferenceItemReaderModelContractPagedResult;
      this.levels = result.items ;
    });
  }


  query:ChallengeDefinitionQueryModel =  INITIAL_QUERY;
  challengeDefinitionStateModel:ChallengeDefinitionStateModel={} as ChallengeDefinitionStateModel;

  clear():void {
    this.store.dispatch(ChallengeDefinitionSearchbarActions.updateQuery({ query:{...INITIAL_QUERY} }));
  }

  search():void{
    this.store.dispatch(ChallengeDefinitionSearchbarActions.updateQuery({ query:{...this.query}}));
  }

}

