import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/core/api.service';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

    // カテゴリ別、商品一覧
    productsByCategory: any[] = [];
    testValue = 'Hello World～!';

    constructor(
        private activatedRoute: ActivatedRoute,
        private apiService: ApiService) { }

    ngOnInit() {
        const category = this.activatedRoute.snapshot.queryParamMap.get('category');
        this.apiService.getProductsByCategoryNo(category).subscribe(
            (data: any) => {
                this.productsByCategory = data.data;
            }
        );
    }

}
