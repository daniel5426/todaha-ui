import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'lib-access-denied-page',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    RouterModule
  ],
  templateUrl: './access-denied-page.component.html',
  styleUrl: './access-denied-page.component.scss'
})
export class AccessDeniedPageComponent {

}
