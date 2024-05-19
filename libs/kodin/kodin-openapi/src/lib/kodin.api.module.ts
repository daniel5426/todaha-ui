import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { KodinApiConfiguration } from './kodin.api.configuration';
import { HttpClient } from '@angular/common/http';


@NgModule({
  imports:      [],
  declarations: [],
  exports:      [],
  providers: []
})
export class KodinApiModule {
    public static forRoot(configurationFactory: () => KodinApiConfiguration): ModuleWithProviders<KodinApiModule> {
        return {
            ngModule: KodinApiModule,
            providers: [ { provide: KodinApiConfiguration, useFactory: configurationFactory } ]
        };
    }

    constructor( @Optional() @SkipSelf() parentModule: KodinApiModule,
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
