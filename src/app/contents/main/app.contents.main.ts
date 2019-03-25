import { Component, ViewChild, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const headers = new HttpHeaders().set('Content-Type', 'application/json');

@Component({
    templateUrl: './app.contents.main.html',
    styleUrls: ['./app.contents.main.scss']
})

export class AppContentsMainComponent {

    constructor(
        // private http: HttpClient,
        // private sanitizer: DomSanitizer,
        private router: Router
    ) { }

    // FIXME router/get参考
    gotoProductByCategory(category: string) {
        this.router.navigate(['/products'], { queryParams: { category: category } });
    }
}
