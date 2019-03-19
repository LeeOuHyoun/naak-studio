import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Data } from '@angular/router';

// const headers = new HttpHeaders().set('Content-Type', 'application/json');
@Component({
    templateUrl: './app.contents.yarn.html',
    styleUrls: ['./app.contents.yarn.scss']
})
export class AppContentsYarnComponent {

    constructor(private http: HttpClient) {
        this.init();
    }

    // 糸一覧
    public yarnProducts: any[] = [];

    init() {
        // 初期値取得（糸一覧）
        this.http.post<Data>('/api/products/yarn', { 'category': '1' }).subscribe(
            data => {
                this.yarnProducts = data.data;
            },
            error => { console.log('error %O', error); }
        );
    }

    testOnClick() {
        bootbox.alert('helloWorld');
    }
}
