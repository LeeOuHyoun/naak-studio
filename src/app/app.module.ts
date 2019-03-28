import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

// XXX TODO
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

// angular material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { AuthInterceptor } from './providers/authInterceptor';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// XXX TODO service api 勉強中
import { ApiService } from './core/api.service';
// naak-studio modules
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './contents/main/main.component';
import { ProductsComponent } from './contents/products/products.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        MainComponent,
        ProductsComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', component: MainComponent },
            { path: 'products', component: ProductsComponent }
        ]),
        BrowserAnimationsModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        MatProgressSpinnerModule
    ],
    providers: [{
        provide: HTTP_INTERCEPTORS,
        useClass: AuthInterceptor,
        multi: true
    },
        ApiService],
    bootstrap: [AppComponent]
})
export class AppModule { }
