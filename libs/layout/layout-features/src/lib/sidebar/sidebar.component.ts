import { MenuComponent } from '../menu/menu.component';
import { ButtonModule } from 'primeng/button';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { StyleClassModule } from 'primeng/styleclass';
import { RippleModule } from 'primeng/ripple';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { SidebarComponentActions } from '@guppy/layout/layout-state';
@Component({
  selector: 'lib-sidebar',
  standalone: true,
  imports: [
    TranslateModule,
    CommonModule,
    FormsModule,
    MenuComponent,
    ButtonModule,
    StyleClassModule,
    RippleModule
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  constructor(
    private store:Store
  ) { }
  @ViewChild('menuContainer') menuContainer!: ElementRef;

  roles= ['SUPER_ADMIN', 'ADMIN','MANAGER','USER'];
  selectedRole='[[ROLE]]';

  onRoleClick(role:string){
    this.selectedRole=role;
    this.store.dispatch(SidebarComponentActions.changeRole({role:this.selectedRole}));
  }
}
