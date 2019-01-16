import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    templateUrl: './app.contents.main.html',
    styleUrls: ['./app.contents.main.scss']
})

export class AppContentsMainComponent {
    constructor(private http: HttpClient) {
        console.log('Hello AppContentsMainComponent ~ !!');
        this.getPosts();
    }
    getPosts() {
        this.http.get('../assets/json/db.json').subscribe((data) => {
            console.log(JSON.stringify(data));
        }, err => {
            console.log('error___');
        });
    }

    getPosts2() {
        // https://jsonplaceholder.typicode.com/posts
        this.http.get('../assets/json/dummyDB.json')
        .toPromise()
        .then((data) => {
            console.log('hello~~');
            console.log(JSON.stringify(data));
        }).catch((error) => {
            console.log('error ===>');
        });
    }
}
