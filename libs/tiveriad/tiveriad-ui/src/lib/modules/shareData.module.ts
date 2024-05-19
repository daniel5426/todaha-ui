import { Observable } from 'rxjs';
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { ShareDataServiceConfiguration  } from './shareData.configuration';

export type getAllDelegate=()=>Observable<any>;
export type searchDelegate=(value:string)=>Observable<any>;

export class ShareDataServiceConfigurations {
  repositories:ShareDataServiceConfiguration[] = [];
}

@NgModule({
  imports:      [],
  declarations: [],
  exports:      [],
  providers: []
})
export class ShareDataModule {

  public static forRoot(shareDataConfigurations:ShareDataServiceConfigurations): ModuleWithProviders<ShareDataModule> {
    return {
        ngModule: ShareDataModule,
        providers: [ {
          provide: ShareDataServiceConfigurations,
          useFactory: ()=>{ return shareDataConfigurations }

        } ]
    };
  }

  constructor( @Optional() @SkipSelf() parentModule: ShareDataModule) {
      if (parentModule) {
          throw new Error('ShareDataModule is already loaded. Import in your base AppModule only.');
      }
  }

}









