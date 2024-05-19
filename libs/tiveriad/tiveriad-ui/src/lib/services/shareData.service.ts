import { EnvironmentInjector, Inject, Injectable, inject, runInInjectionContext } from "@angular/core";
import { ShareDataServiceConfigurations } from "../modules/shareData.module";
import { ShareDataServiceConfiguration } from '../modules/shareData.configuration';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ShareDataService {

  constructor(@Inject(ShareDataServiceConfigurations) private configurations:ShareDataServiceConfigurations) { }

  environmentInjector = inject(EnvironmentInjector);

  public getAll(key:string) : Observable<any>  {
    const conf = this.configurations.repositories.find((item:ShareDataServiceConfiguration)=> item.key === key);
    if (!conf)
      throw new Error(`No configuration found for key ${key}`);
    return runInInjectionContext(this.environmentInjector, ()=>conf.getAll());
  }

  public search(key:string, value:string):Observable<any>  {
    const conf = this.configurations.repositories.find((item:ShareDataServiceConfiguration)=> item.key === key );
    if (!conf)
      throw new Error(`No configuration found for key ${key}`);
    return runInInjectionContext(this.environmentInjector, ()=>conf.search(value));
  }
}
