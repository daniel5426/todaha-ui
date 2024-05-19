import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponentActions,  ProfileSidebarComponentActions, selectLayoutState, selectProfileSideBarMenuItems } from '@guppy/layout/layout-state';
import { Store, select } from '@ngrx/store';

import { SelectButtonModule } from 'primeng/selectbutton';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { BadgeModule } from 'primeng/badge';
import { RippleModule } from 'primeng/ripple';
import { StyleClassModule } from 'primeng/styleclass';
import { SidebarModule } from 'primeng/sidebar';
import { MenuItem } from 'primeng/api';
import { Router, RouterModule } from '@angular/router';
import { OidcSecurityService } from 'angular-auth-oidc-client';

@Component({
  selector: 'lib-profile-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    SelectButtonModule,
    FormsModule,
    ButtonModule,
    InputTextModule,
    BadgeModule,
    RippleModule,
    StyleClassModule,
    SidebarModule],
  templateUrl: './profile-sidebar.component.html',
  styleUrl: './profile-sidebar.component.scss'
})
export class ProfileSidebarComponent implements OnInit {


  profileSideBarVisible=true;
  menuItems:MenuItem[] = [];

  constructor(
    public router: Router,
    private store: Store,
    private oidcSecurityService: OidcSecurityService
  )
  {
    this.store.pipe(select(selectLayoutState)).subscribe((data) => {
      this.profileSideBarVisible = data.profileSideBarVisible;

      if (this.profileSideBarVisible) {
        this.oidcSecurityService.getUserData().subscribe((data) => {

          console.log("User Data: " + JSON.stringify(data));

        });
      }
    });

    this.store.pipe(select(selectProfileSideBarMenuItems)).subscribe((data) => {
      this.menuItems = data;
    });




  }
  ngOnInit(): void {
    this.store.dispatch(ProfileSidebarComponentActions.loadMenuItems());




  }

  get visibility(): boolean {
    return this.profileSideBarVisible;
}

set visibility(_val: boolean) {
  if (_val!=this.profileSideBarVisible)
    this.profileSideBarVisible = _val;
    this.store.dispatch(LayoutComponentActions.setProfileSideBarVisibility({visible: _val}));
  }



}
