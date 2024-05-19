import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { ReferenceItemApiConfiguration } from './referenceItem.api.configuration';
import { HttpClient } from '@angular/common/http';


@NgModule({
  imports:      [],
  declarations: [],
  exports:      [],
  providers: []
})
export class ReferenceItemApiModule {
    public static forRoot(configurationFactory: () => ReferenceItemApiConfiguration): ModuleWithProviders<ReferenceItemApiModule> {
        return {
            ngModule: ReferenceItemApiModule,
            providers: [ { provide: ReferenceItemApiConfiguration, useFactory: configurationFactory } ]
        };
    }

    constructor( @Optional() @SkipSelf() parentModule: ReferenceItemApiModule,
                 @Optional() http: HttpClient) {
        if (parentModule) {
            throw new Error('IdentitiesApiModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
            'See also https://github.com/angular/angular/issues/20575');
        }
    }
}
