
import { Component, OnInit,  inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BlockUIModule } from 'primeng/blockui';
import { SidebarModule } from 'primeng/sidebar';
import { RippleModule } from 'primeng/ripple';
import { ToastModule } from 'primeng/toast';
import { StyleClassModule } from 'primeng/styleclass';
import { ChallengeDefinitionDetailComponent } from '../challenge-definition-detail/challenge-definition-detail.component';
import { ChallengeDefinitionSearchbarComponent } from '../challenge-definition-searchbar/challenge-definition-searchbar.component';
import { ChallengeDefinitionListComponent } from '../challenge-definition-list/challenge-definition-list.component';
import { ChallengeDefinitionToolbarComponent} from '../challenge-definition-toolbar/challenge-definition-toolbar.component';
import { Store, select } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { PanelModule }from 'primeng/panel';
import {ChallengeDefinitionSearchbarActions, INITIAL_QUERY,  selectLoadingValue, selectMessageValue, selectTitleValue } from '@guppy/kodin/challengeDefinitions/state';
@Component({
  selector: 'lib-challenge-definition-searchlist',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    ChallengeDefinitionDetailComponent,
    ChallengeDefinitionSearchbarComponent,
    ChallengeDefinitionListComponent,
    ChallengeDefinitionToolbarComponent,
    BlockUIModule,
    SidebarModule,
    RippleModule,
    StyleClassModule,
    ToastModule,
    TranslateModule,
    PanelModule
  ],
  templateUrl: './challenge-definition-searchlist.component.html',
  styleUrl: './challenge-definition-searchlist.component.scss'
})
export class ChallengeDefinitionSearchlistComponent implements OnInit {

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


    this.store.pipe(select(selectMessageValue)).subscribe((message) => {
      console.log(message);
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



  ngOnInit() {
    this.route.paramMap.subscribe((params) => {

      this.store.dispatch(
        ChallengeDefinitionSearchbarActions.updateQuery({
          query: INITIAL_QUERY,
        })
      );
    });
  }
}

export class TranslateLanguageLoader implements TranslateLoader {
  http = inject(HttpClient);

  public getTranslation(lang: string) {
    console.log('lang', lang);
    return this.http.get(`/assets/locale/${lang}.json`);
  }
}
