import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxLoadingModule } from 'ngx-loading';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './header/app.header';
import { AppFooterComponent } from './footer/app.footer';
import { AppContentsMainComponent } from './contents/main/app.contents.main';
import { AppContentsYarnComponent } from './contents/products/yarn/app.contents.yarn';
import { AppContentsDiykitComponent } from './contents/products/diykit/app.contents.diykit';
import { AuthInterceptor } from './providers/authInterceptor';

@NgModule({
    declarations: [
        AppComponent,
        AppHeaderComponent,
        AppFooterComponent,
        AppContentsMainComponent,
        AppContentsYarnComponent,
        AppContentsDiykitComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        NgxLoadingModule.forRoot({}),
        RouterModule.forRoot([
            { path: '', component: AppContentsMainComponent },
            { path: 'yarn', component: AppContentsYarnComponent },
            { path: 'diykit', component: AppContentsDiykitComponent }
        ])
    ],
    providers: [{
        provide: HTTP_INTERCEPTORS,
        useClass: AuthInterceptor,
        multi: true
    }],
    bootstrap: [AppComponent]
})
export class AppModule { }
