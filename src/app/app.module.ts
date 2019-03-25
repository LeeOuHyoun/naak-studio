import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// XXX FIXME
import { NgxLoadingModule } from 'ngx-loading';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './header/app.header';
import { AppFooterComponent } from './footer/app.footer';
import { AppContentsMainComponent } from './contents/main/app.contents.main';
import { AppContentsProductsComponent } from './contents/products/app.contents.products';

import { AuthInterceptor } from './providers/authInterceptor';

// angular material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

// XXX FIXME
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
    declarations: [
        AppComponent,
        AppHeaderComponent,
        AppFooterComponent,
        AppContentsMainComponent,
        AppContentsProductsComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        NgxLoadingModule.forRoot({}),
        RouterModule.forRoot([
            { path: '', component: AppContentsMainComponent },
            { path: 'products', component: AppContentsProductsComponent }
        ]),
        BrowserAnimationsModule,
        MatInputModule,
        MatButtonModule,
        MatProgressSpinnerModule
    ],
    providers: [{
        provide: HTTP_INTERCEPTORS,
        useClass: AuthInterceptor,
        multi: true
    }],
    bootstrap: [AppComponent]
})
export class AppModule { }
