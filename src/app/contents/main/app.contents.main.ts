import { Component, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const headers = new HttpHeaders().set('Content-Type', 'application/json');
@Component({
  templateUrl: './app.contents.main.html',
  styleUrls: ['./app.contents.main.scss']
})

@Injectable()
export class AppContentsMainComponent {

  constructor(private http: HttpClient) { }

  getPosts2() {
    this.http
      .get('../assets/json/dummyDB.json')
      .toPromise()
      .then(data => {
        console.log('hello~~');
        console.log(JSON.stringify(data));
      })
      .catch(error => {
        console.log('error ===>');
      });
  }

  clickBtnOne(arg) {
    this.http.post( 'api/feed', { data: 'testData!!' }, { headers } ).subscribe(
        data => {
        console.log('get Data ===> %O', data);
      },
      err => {
        console.log('error___');
      }
      )
  }
}
