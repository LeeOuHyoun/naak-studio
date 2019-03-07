import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const headers = new HttpHeaders().set('Content-Type', 'application/json');
@Component({
  templateUrl: './app.contents.main.html',
  styleUrls: ['./app.contents.main.scss']
})

export class AppContentsMainComponent {

  constructor(private http: HttpClient) { }

  clickBtnOne() {
    this.http.post( '/api/feed', { data: 'testData!!' }, { headers } ).subscribe(
        data => { console.log('get Data ===> %O', data); },
        error => { console.log('error %O', error); }
    );
  }
}
