import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const headers = new HttpHeaders().set('Content-Type', 'application/json');
@Component({
    templateUrl: './app.contents.main.html',
    styleUrls: ['./app.contents.main.scss']
})

export class AppContentsMainComponent {

    constructor(private http: HttpClient) { }

    clickBtnGetAll() {
        this.http.post('/api/feed/products', {}, { headers }).subscribe(
            data => { console.log('get Data ===> %s', JSON.stringify(data)); },
            error => { console.log('error %O', error); }
        );
    }
}
