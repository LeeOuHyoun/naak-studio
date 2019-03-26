import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Data, ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: './app.contents.products.html',
    styleUrls: ['./app.contents.products.scss']
})
export class AppContentsProductsComponent implements OnInit {

    // カテゴリ別、商品一覧
    productsByCategory: any[] = [];
    testValue = 'Hello World～!';

    constructor(
        private http: HttpClient,
        private route: ActivatedRoute) { }

    ngOnInit(): void {
        const productCategory = this.route.snapshot.queryParamMap.get('category');
        this.http.post<Data>('/api/products/findByCategory', { 'category': productCategory }).subscribe(
            data => {
                this.productsByCategory = data.data;
            },
            error => { console.log('error %O', error); }
        );
    }
}
