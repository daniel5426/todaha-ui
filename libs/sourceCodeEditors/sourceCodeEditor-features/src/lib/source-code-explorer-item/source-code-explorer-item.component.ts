import { Component, HostBinding, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { StyleClassModule } from 'primeng/styleclass';
import { TooltipModule } from 'primeng/tooltip';
import { RippleModule } from 'primeng/ripple';
import { BadgeModule } from 'primeng/badge';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: '[lib-source-code-explorer-item]',
  standalone: true,
  imports: [
    TranslateModule,
    CommonModule,
    TooltipModule,
    RippleModule,
    ButtonModule,
    BadgeModule,
    StyleClassModule,
    StyleClassModule
  ],
  templateUrl: './source-code-explorer-item.component.html',
  styleUrl: './source-code-explorer-item.component.scss',
  animations: [
    trigger('children', [
      state(
        'collapsed',
        style({
          height: '0',
        })
      ),
      state(
        'expanded',
        style({
          height: '*',
        })
      ),
      state(
        'hidden',
        style({
          display: 'none',
        })
      ),
      state(
        'visible',
        style({
          display: 'block',
        })
      ),
      transition(
        'collapsed <=> expanded',
        animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')
      ),
    ]),
  ],
})

export class SourceCodeExplorerItemComponent {

  @Input() item: any;
  @Input() index!: number;
  @Input() @HostBinding('class.sourceCode-root-item') root!: boolean;
  @Input() parentKey!: string;

  active = false;
  key = '';


  @HostBinding('class.active-item')
  get activeClass() {
    return this.active && !this.root;
  }

  get subItemAnimation() {
    return this.root ? 'expanded' : this.active ? 'expanded' : 'collapsed';
  }

  itemClick(event: Event) {
    this.active = !this.active;

    if (this.item.disabled) {
      event.preventDefault();
      return;
    }

  }


}
