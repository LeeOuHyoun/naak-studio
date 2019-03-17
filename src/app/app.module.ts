import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgxLoadingModule, ngxLoadingAnimationTypes } from 'ngx-loading';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './header/app.header';
import { AppFooterComponent } from './footer/app.footer';
import { AppContentsMainComponent } from './contents/main/app.contents.main';
import { AppContentsYarnComponent } from './contents/products/yarn/app.contents.yarn';
import { AppContentsDiykitComponent } from './contents/products/diykit/app.contents.diykit';

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
        NgxLoadingModule.forRoot({
            animationType: ngxLoadingAnimationTypes.wanderingCubes,
            backdropBackgroundColour: 'rgba(0,0,0,0.1)',
            backdropBorderRadius: '4px',
            primaryColour: '#ffffff',
            secondaryColour: '#ffffff',
            tertiaryColour: '#ffffff'
        }),
        RouterModule.forRoot([
            {
                path: '',
                component: AppContentsMainComponent
            },
            {
                path: 'yarn',
                component: AppContentsYarnComponent
            },
            {
                path: 'diykit',
                component: AppContentsDiykitComponent
            }
        ])
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
