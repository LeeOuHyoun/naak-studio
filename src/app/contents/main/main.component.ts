import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

    constructor(private router: Router) { }

    ngOnInit() { }

    // 商品一覧画面遷移
    gotoProductByCategory(category: string) {
        this.router.navigate(['/products'], { queryParams: { category: category } });
    }
}
