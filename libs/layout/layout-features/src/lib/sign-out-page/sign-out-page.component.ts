import { Component,  OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { Layout } from '@guppy/layout/layout-domain';
import { selectLayoutState } from '@guppy/layout/layout-state';
import { Store, select } from '@ngrx/store';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { TranslateModule } from '@ngx-translate/core';
import { RippleModule } from 'primeng/ripple';
@Component({
  selector: 'lib-sign-out-page',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    ButtonModule,
    RippleModule,
    RouterModule
  ],
  templateUrl: './sign-out-page.component.html',
  styleUrl: './sign-out-page.component.scss'
})
export class SignOutPageComponent implements OnInit{

  layout:Layout = {} as Layout;
  constructor(private store:Store, private	router:Router, private oidcSecurityService: OidcSecurityService) {
    this.store.pipe(select(selectLayoutState)).subscribe((data) => {
      this.layout = data.layout;
    });
  }

  get dark(): boolean {
    return this.layout.colorScheme !== 'light';
  }


  ngOnInit(): void {
    this.oidcSecurityService
      .logoff().subscribe((data) => { console.log(data); })
  }

}
