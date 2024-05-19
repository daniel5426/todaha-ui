import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { ToolbarModule } from 'primeng/toolbar';
import { Store} from '@ngrx/store';
import { ChallengeDefinitionListActions } from '@guppy/kodin/challengeDefinitions/state';

@Component({
  selector: 'lib-challenge-definition-toolbar',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    RippleModule,
    ToolbarModule
  ],
  templateUrl: './challenge-definition-toolbar.component.html',
  styleUrl: './challenge-definition-toolbar.component.scss'
})
export class ChallengeDefinitionToolbarComponent {


  constructor(private store: Store,) {

  }

  add():void {
    this.store.dispatch(ChallengeDefinitionListActions.add());
  }

  delete():void {
    console.log('add');
  }

  export(exportType:string):void {
    console.log(exportType);
  }
}
