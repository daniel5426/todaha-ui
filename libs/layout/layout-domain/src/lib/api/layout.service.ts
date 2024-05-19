import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Layout } from '../model/layout.model';
import { LayoutDomainConfiguration } from '../layoutDomainConfiguration';


export class LayoutService {
  constructor(private http: HttpClient, private layoutDomainConfiguration:LayoutDomainConfiguration) {}
  get userUrl() {
    return `${this.layoutDomainConfiguration.rootUrl}/users`;
  }
  get(userId: string): Observable<any> {
    const endpointUrl = `${this.userUrl}/${userId}`;
    return this.http
      .get<Layout>(endpointUrl)
      .pipe(catchError(throwError));
  }
  update(user: Layout): Observable<any> {
    const endpointUrl = `${this.userUrl}/${user.id}`;
    return this.http
      .put<Layout>(endpointUrl, user)
      .pipe(catchError(throwError));
  }
  getAll() {
    const endpointUrl = `${this.userUrl}`;
    return this.http
      .get<Layout[]>(endpointUrl)
      .pipe(catchError(throwError));
  }
  delete(userId: string): Observable<any> {
    const endpointUrl = `${this.userUrl}/${userId}`;
    return this.http
      .delete<Layout>(endpointUrl)
      .pipe(catchError(throwError));
  }
  create(user: Layout): Observable<any> {
    const endpointUrl = `${this.userUrl}`;
    return this.http
      .post<Layout>(endpointUrl, user)
      .pipe(catchError(throwError));
  }

}
