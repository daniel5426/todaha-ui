import { Component } from '@angular/core';
import {  filter } from 'rxjs';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ActivatedRouteSnapshot, NavigationEnd, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'lib-breadcrumb',
  standalone: true,
  imports: [
    BreadcrumbModule
  ],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss'
})
export class BreadcrumbComponent {

  items:MenuItem[] = [];
  home: MenuItem | undefined;
  constructor(
    private router: Router
  ) {

    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(event => {
      const root = this.router.routerState.snapshot.root;
      const breadcrumbs: MenuItem[] = [];
      this.addBreadcrumb(root, [], breadcrumbs);
      console.log('event '  + JSON.stringify(event));
      this.items = breadcrumbs;
  });

  this.home = {icon: 'pi pi-home', routerLink: '/'};


  }

  private addBreadcrumb(route: ActivatedRouteSnapshot, parentUrl: string[], breadcrumbs: MenuItem[]) {
    const routeUrl = parentUrl.concat(route.url.map(url => url.path));
    const breadcrumb = route.data['breadcrumb'];


    const parentBreadcrumb = route.parent && route.parent.data ? route.parent.data['breadcrumb'] : null;
    if (breadcrumb && breadcrumb !== parentBreadcrumb) {
        breadcrumbs.push({
            label: route.data['breadcrumb'],
            url: '/' + routeUrl.join('/')
        });
    }

    if (route.firstChild) {
        this.addBreadcrumb(route.firstChild, routeUrl, breadcrumbs);
    }
}

}
