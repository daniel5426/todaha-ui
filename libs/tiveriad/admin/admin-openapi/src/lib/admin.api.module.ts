import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { AdminApiConfiguration } from './admin.api.configuration';
import { HttpClient } from '@angular/common/http';


@NgModule({
  imports:      [],
  declarations: [],
  exports:      [],
  providers: []
})
export class AdminApiModule {
    public static forRoot(configurationFactory: () => AdminApiConfiguration): ModuleWithProviders<AdminApiModule> {
        return {
            ngModule: AdminApiModule,
            providers: [ { provide: AdminApiConfiguration, useFactory: configurationFactory } ]
        };
    }

    constructor( @Optional() @SkipSelf() parentModule: AdminApiModule,
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
