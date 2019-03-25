import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    templateUrl: './app.contents.main.html',
    styleUrls: ['./app.contents.main.scss']
})
export class AppContentsMainComponent {

    testValue = 'testFruit_1';

    constructor(private router: Router) { }

    // 商品一覧画面遷移
    gotoProductByCategory(category: string) {
        this.router.navigate(['/products'], { queryParams: { category: category } });
    }
}
