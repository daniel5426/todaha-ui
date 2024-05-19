

import { Component, numberAttribute, OnInit, ViewEncapsulation } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';

import { Store, select } from '@ngrx/store';
import { SplitterModule } from 'primeng/splitter';
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
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { CheckboxModule } from 'primeng/checkbox';
import { CardModule } from 'primeng/card';
import { selectReadModelValue, selectEditModeValue, ChallengeDefinitionDetailActions } from '@guppy/kodin/challengeDefinitions/state';
import {  ChallengeDefinitionState, ChallengeDefinitionWriterModelContract } from '@guppy/kodin/openapi';
import { ShareDataService } from '@guppy/tiveriad/ui';
import { TabViewModule } from 'primeng/tabview';
import { SourceCodeEditorComponent } from  '@guppy/sourceCodeEditors/features';
import { EditorModule } from 'primeng/editor';
import { ReferenceItemReaderModelContract, ReferenceItemReaderModelContractPagedResult } from '@guppy/referenceItems/openapi';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';
import { InputNumberModule } from 'primeng/inputnumber';
@Component({
  selector: 'lib-challenge-definition-detail',
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
    CardModule,
    DialogModule,
    TabViewModule,
    SplitterModule,
    FloatLabelModule,
    EditorModule,
    DropdownModule,
    MultiSelectModule,
    InputNumberModule,
    SourceCodeEditorComponent,
    ReactiveFormsModule
  ],
  templateUrl: './challenge-definition-detail.component.html',
  styleUrl: './challenge-definition-detail.component.scss',
  encapsulation :ViewEncapsulation.None
})
export class ChallengeDefinitionDetailComponent implements OnInit {

  levels: Array<ReferenceItemReaderModelContract>|undefined=[];
  programmingLanguages: Array<ReferenceItemReaderModelContract>|undefined=[];
  skills: Array<ReferenceItemReaderModelContract>|undefined=[];
  topics: Array<ReferenceItemReaderModelContract>|undefined=[];


  constructor(
    private store: Store,
    private referenceItemService: ShareDataService,
    private formBuilder: FormBuilder
  )
  {
    this.store.pipe(select(selectReadModelValue)).subscribe((detail) => {

      if (detail !=null) {
        this.model = {
          unitTests: [],
          sourceCodes: [],
          levelId: "",
          skillsId: [],
          topicsId: []
        };
      }
    });

    this.store.pipe(select(selectEditModeValue)).subscribe((editMode) => {
      if (this.editMode != editMode)
        this.editMode = editMode ?? "";
      this.visible = !(this.editMode == null || this.editMode == '');
    });

    referenceItemService.getAll("skills").subscribe((data) => {
      console.log(data);
    });
    const item  = {

    } as ChallengeDefinitionWriterModelContract;

     this.model = item;

  }

  visible = false;
  editMode = "";
  title = "Challenge Definition";
  model:ChallengeDefinitionWriterModelContract={} as ChallengeDefinitionWriterModelContract;
  form: FormGroup = this.formBuilder.group({
    title: ['',[Validators.required,Validators.minLength(6),Validators.maxLength(40)]],
    resume: ['',[Validators.required]],
    state :  [ChallengeDefinitionState.NUMBER_0, Validators.required],
    description: ['', Validators.required],
    instruction: ['', Validators.required],
    score: [0, [Validators.required, Validators.min(0), Validators.max(100)]],
    timeLimit: [0, [Validators.required, Validators.min(0), Validators.max(100)]],
    withLimit: [false],
    levelId: ['', Validators.required],
    skillsId: [[] ,[Validators.required, Validators.minLength(1), Validators.maxLength(10)]],
    topicsId: [[],[Validators.required, Validators.minLength(1), Validators.maxLength(10)]]
  });
  submitted = false;

  ngOnInit(): void {

    this.referenceItemService.getAll('skills').subscribe((data) => {
      const result = data as ReferenceItemReaderModelContractPagedResult;
      this.skills = result.items ;
      console.log("skills"+this.skills);
    });

    this.referenceItemService.getAll('levels').subscribe((data) => {
      const result = data as ReferenceItemReaderModelContractPagedResult;
      this.levels = result.items ;
      console.log("levels"+this.levels)
    });

    this.referenceItemService.getAll('programmingLanguages').subscribe((data) => {
      const result = data as ReferenceItemReaderModelContractPagedResult;
      this.programmingLanguages = result.items ;
      console.log("PL"+this.programmingLanguages);
    });

    this.referenceItemService.getAll('topics').subscribe((data) => {
      const result = data as ReferenceItemReaderModelContractPagedResult;
      this.topics = result.items ;
      console.log("TOPICS"+this.topics);
    });


  }

  validate():void {
    console.log(this.editMode);
    this.submitted = true;
    if (this.editMode=="ADD"){}
/*
      this.store.dispatch(ChallengeDefinitionDetailActions.add({writerModel:this.model}));
*/
    else if (this.editMode=="UPDATE"){}
/*
      this.store.dispatch(ChallengeDefinitionDetailActions.update({writerModel:this.model}));
*/
  }

  cancel():void {
    this.store.dispatch(ChallengeDefinitionDetailActions.cancel());
    this.submitted = false;
  }

  get visibility(): boolean {
    return this.visible;
  }

  set visibility(value: boolean) {
    if (!value && value != this.visible)
      this.store.dispatch(
        ChallengeDefinitionDetailActions.cancel()
      );

  }
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }


  }
