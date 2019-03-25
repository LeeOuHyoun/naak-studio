import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Data, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
    templateUrl: './app.contents.products.html',
    styleUrls: ['./app.contents.products.scss']
})

export class AppContentsProductsComponent {

    public productsByCategory: any[] = [];

    constructor(
        private http: HttpClient,
        private route: ActivatedRoute) {
        this.init();
    }

    init() {
        const productCategory = this.route.snapshot.queryParamMap.get('category');
        this.http.post<Data>('/api/products/findByCategory', { 'category': productCategory }).subscribe(
            data => {
                this.productsByCategory = data.data;
            },
            error => { console.log('error %O', error); }
        );
    }
}
