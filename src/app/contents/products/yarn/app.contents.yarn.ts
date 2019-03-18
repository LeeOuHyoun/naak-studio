import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// const headers = new HttpHeaders().set('Content-Type', 'application/json');

@Component({
    templateUrl: './app.contents.yarn.html',
    styleUrls: ['./app.contents.yarn.scss']
})

export class AppContentsYarnComponent {

    constructor(private http: HttpClient) {
        this.init();
    }

    public yearProducts: any[] = [];
    public helloYarn = 'Hello Yarn~!!!!';

    init() {
        this.http.post<{data: any[]}>('/api/feed/products', {}).subscribe(
            data => {
                this.yearProducts = data.data;
            },
            error => { console.log('error %O', error); }
        );
    }
}
