import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// ActivatedRoute
import { ActivatedRoute, ParamMap } from '@angular/router';
const headers = new HttpHeaders().set('Content-Type', 'application/json');

@Component({
    templateUrl: './app.contents.diykit.html',
    styleUrls: ['./app.contents.diykit.scss']
})

export class AppContentsDiykitComponent {

    constructor(
        private http: HttpClient,
        private route: ActivatedRoute) {
        this.init();
    }

    init() {
        this.route.queryParamMap
            .subscribe((params: ParamMap) => {
                const queryParam = this.route.snapshot.queryParamMap.get('page');
                console.log('%cGetParam => %s', 'font-size:20px; color: #FFAA00;', queryParam);
            });
        console.log('%cHello DIY', 'font-size:20px; color: #FFAA00;');
    }
}
