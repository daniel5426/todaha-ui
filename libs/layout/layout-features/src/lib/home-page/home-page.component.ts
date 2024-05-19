import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Layout } from '@guppy/layout/layout-domain';
import { selectLayoutState } from '@guppy/layout/layout-state';
import { Store, select } from '@ngrx/store';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

@Component({
  selector: 'lib-home-page',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    RippleModule,
    RouterModule
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent  implements OnInit {

  layout:Layout = {} as Layout;
  constructor(private store:Store, private	router:Router) {
    this.store.pipe(select(selectLayoutState)).subscribe((data) => {
      this.layout = data.layout;
    });
  }
  ngOnInit(): void {
    console.log('HomePageComponent');
  }

  onClick() {
    this.router.navigate(['app/dashboard']);
  }

  get dark(): boolean {
    return this.layout.colorScheme !== 'light';
  }

}
