import { ToolbarModule } from 'primeng/toolbar';
import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { SplitterModule } from 'primeng/splitter';
import { TabViewModule } from 'primeng/tabview';
import { SourceItem } from '@guppy/sourceCodeEditors/domain';
import { SourceCodeEditorItemComponent } from '../source-code-editor-item/source-code-editor-item.component';
import { SourceCodeExplorerComponent } from '../source-code-explorer/source-code-explorer.component';
import { StyleClassModule } from 'primeng/styleclass';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';


@Component({
  selector: 'lib-source-code-editor',
  standalone: true,
  imports: [
    CommonModule,
    SplitterModule,
    TabViewModule,
    ToolbarModule,
    RippleModule,
    ButtonModule,
    StyleClassModule,
    SourceCodeEditorItemComponent,
    SourceCodeExplorerComponent
  ],
  templateUrl: './source-code-editor.component.html',
  styleUrl: './source-code-editor.component.scss',
  encapsulation :ViewEncapsulation.None
})
export class SourceCodeEditorComponent {
  sourceItems: SourceItem[] = [];
  constructor() {
    this.sourceItems = [
      {
        sourceCode: 'console.log("Hello World ")',
        fileName: 'app1.js',
        path: 'src/app',
        programmingLanguage: 'javascript'
      },
      {
        sourceCode: 'console.log("Hello World 2")',
        fileName: 'app2.ts',
        path: 'src/app',
        programmingLanguage: 'typescript'
      }
    ]
  }

}
