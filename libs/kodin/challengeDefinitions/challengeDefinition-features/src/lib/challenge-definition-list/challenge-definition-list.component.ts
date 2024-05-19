import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { TableLazyLoadEvent, TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { Store, select } from '@ngrx/store';
import { ChallengeDefinitionReaderModelContract, ChallengeDefinitionReaderModelContractPagedResult } from '@guppy/kodin/openapi';
import { INITIAL_QUERY, ChallengeDefinitionListActions, selectPagedResultValue, selectQueryValue } from '@guppy/kodin/challengeDefinitions/state';
import { PaginatorModule, PaginatorState } from 'primeng/paginator';
import { SplitButtonModule } from 'primeng/splitbutton';
import { MenuModule } from 'primeng/menu';
import { MenuItem} from 'primeng/api';
import { ChallengeDefinitionQueryModel } from '@guppy/kodin/challengeDefinitions/domain';

@Component({
  selector: 'lib-challenge-definition-list',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    TableModule,
    SplitButtonModule,
    MenuModule,
    PaginatorModule,
    TagModule
  ],
  templateUrl: './challenge-definition-list.component.html',
  styleUrl: './challenge-definition-list.component.scss'
})
export class ChallengeDefinitionListComponent {
  model:ChallengeDefinitionReaderModelContractPagedResult
  query:ChallengeDefinitionQueryModel = INITIAL_QUERY;
  activeRow!: ChallengeDefinitionReaderModelContract | null;
  actionItems: {[id:string]: MenuItem[]} = {};



  constructor(
    private store: Store,
  )
  {
    this.store.pipe(select(selectPagedResultValue)).subscribe((pagedResult) => {
      if (pagedResult!=null) {

        this.model = pagedResult;
        if (this.model.items!=null)
          this.buildActionItems(this.model.items );
      }

    });

    this.store.pipe(select(selectQueryValue)).subscribe((query) => {
        const item :ChallengeDefinitionQueryModel = {...query ?? INITIAL_QUERY}
        this.query = item;
    });

    this.model ={} as ChallengeDefinitionReaderModelContractPagedResult;
  }

  public get items() {
    return this.model.items ??  new Array<ChallengeDefinitionReaderModelContract>;
  }

  public get pageCount() {
    return this.model.pageCount ?? 0;
  }

  public get rowCount() {
    return this.model.rowCount ?? 0;
  }

  public get page() {
    return this.model.page ?? 1;
  }

  public get first() {
    const firstItem  = (this.page-1) * this.limit ;
    return firstItem  ;
  }

  public get limit() {
    return this.model.limit ?? 0;
  }

  public get total() {
    return this.limit * this.pageCount ?? 0;
  }


  buildActionItems(items: Array<ChallengeDefinitionReaderModelContract>):void {
    items.forEach(el => {
      this.actionItems[el.id as string] = [
        {
            label: 'Edit',
            icon: 'pi pi-times', command: () => {
            this.editItem(el.id as string);
        }},
      ];
     })
  }
  editItem(id : string) {
    this.store.dispatch(ChallengeDefinitionListActions.edit({id:id}));
  }

  onPageChange(event: PaginatorState) {
    console.log(JSON.stringify(event));
    const page = (event.page??0) + 1;
    this.query = {...this.query, page:page, limit: event.rows ?? 50 };
    this.store.dispatch(ChallengeDefinitionListActions.updateOrders({query:this.query}));
  }

  sort(event: TableLazyLoadEvent) {
    if (event.sortField) {
      this.query = {...this.query, orders: [(event.sortOrder ?? 1) > 0 ? event.sortField as string : "-" + event.sortField]};
      this.store.dispatch(ChallengeDefinitionListActions.updateOrders({query:this.query}));
    }
  }

  severity = (visibility:string) => visibility=="Public"?"success":"info";
}
