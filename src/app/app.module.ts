import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './header/app.header';
import { AppFooterComponent } from './footer/app.footer';
import { AppContentsMainComponent } from './contents/main/app.contents.main';
import { AppContentsYarnComponent } from './contents/products/yarn/app.contents.yarn';

@NgModule({
    declarations: [
        AppComponent,
        AppHeaderComponent,
        AppFooterComponent,
        AppContentsMainComponent,
        AppContentsYarnComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        RouterModule.forRoot([
            {
                path: '',
                component: AppContentsMainComponent
            },
            {
                path: 'yarn',
                component: AppContentsYarnComponent
            }
        ])
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
