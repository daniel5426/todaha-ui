
import { Component,  ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import * as monaco from 'monaco-editor';

import { SourceItem } from '@guppy/sourceCodeEditors/domain';
import { Subscription, fromEvent } from 'rxjs';



@Component({
  selector: 'lib-source-code-editor-item',
  standalone: true,
  imports: [

  ],
  templateUrl: './source-code-editor-item.component.html',
  styleUrl: './source-code-editor-item.component.scss',
})
export class SourceCodeEditorItemComponent  implements  OnInit, OnDestroy {

  @Input() sourceItem: SourceItem = {} as SourceItem;
  @ViewChild('editorContainer', { static: true }) _editorContainer!: ElementRef;
  private codeEditorInstance!: monaco.editor.IStandaloneCodeEditor | undefined;
  private windowResizeSubscription: Subscription | undefined;

  ngOnInit() {
    this.codeEditorInstance = monaco.editor.create(this._editorContainer.nativeElement, {
      theme: 'vs',
      wordWrap: 'on',
      wrappingIndent: 'indent',
      language: this.sourceItem.programmingLanguage,
      // minimap: { enabled: false },
      automaticLayout: true,
    });

    this.codeEditorInstance.setValue(this.sourceItem.sourceCode);

    this.windowResizeSubscription = fromEvent(window, 'resize').subscribe(() =>
      {
        if (this.codeEditorInstance) {
          this.codeEditorInstance.layout();
        }
      }
    );
  }

  ngOnDestroy() {
    if (this.windowResizeSubscription) {
      this.windowResizeSubscription.unsubscribe();
    }
    if (this.codeEditorInstance) {
      this.codeEditorInstance.dispose();
      this.codeEditorInstance = undefined;
    }
  }







}
