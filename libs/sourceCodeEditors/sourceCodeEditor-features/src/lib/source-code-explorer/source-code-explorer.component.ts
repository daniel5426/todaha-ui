import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { MenuItem } from 'primeng/api/menuitem';
import { SourceCodeExplorerItemComponent } from '../source-code-explorer-item/source-code-explorer-item.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-source-code-explorer',
  standalone: true,
  imports: [CommonModule, SourceCodeExplorerItemComponent],
  templateUrl: './source-code-explorer.component.html',
  styleUrl: './source-code-explorer.component.scss',
})
export class SourceCodeExplorerComponent {
  items: MenuItem[] | undefined;

  constructor(private store: Store) {
    this.items = [
      {
        label: 'Admin',
        icon: 'pi pi-fw pi-briefcase',
        items: [
          {
            label: 'Questions',
            icon: 'pi pi-fw pi-folder',
            routerLink: ['app/questions'],
            items: [
              {
                label: 'Challenge definitions',
                icon: 'pi pi-fw pi-code',
                routerLink: ['app/challengeDefinitions'],
              },
              {
                label: 'Quizz definitions',
                icon: 'pi pi-fw pi-code',
                routerLink: ['app/quizzDefinitions'],
              },
              {
                label: 'Questions',
                icon: 'pi pi-fw pi-folder',
                routerLink: ['app/questions'],
                items: [
                  {
                    label: 'Challenge definitions',
                    icon: 'pi pi-fw pi-code',
                    routerLink: ['app/challengeDefinitions'],
                  },
                  {
                    label: 'Quizz definitions',
                    icon: 'pi pi-fw pi-code',
                    routerLink: ['app/quizzDefinitions'],
                  },
                ],
              },
            ],
          },
        ],
      },
    ];
  }
}
