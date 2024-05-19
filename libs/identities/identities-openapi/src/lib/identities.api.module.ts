import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { IdentitiesApiConfiguration } from './identities.api.configuration';
import { HttpClient } from '@angular/common/http';


@NgModule({
  imports:      [],
  declarations: [],
  exports:      [],
  providers: []
})
export class IdentitiesApiModule {
    public static forRoot(configurationFactory: () => IdentitiesApiConfiguration): ModuleWithProviders<IdentitiesApiModule> {
        return {
            ngModule: IdentitiesApiModule,
            providers: [ { provide: IdentitiesApiConfiguration, useFactory: configurationFactory } ]
        };
    }

    constructor( @Optional() @SkipSelf() parentModule: IdentitiesApiModule,
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
