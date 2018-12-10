import { Component } from '@angular/core';
// TODO
// import * as $ from 'jquery';

@Component({
    selector: 'app-header',
    templateUrl: './app.header.html',
    styleUrls: ['./app.header.scss']
})
export class AppHeaderComponent {
    constructor() { }
    title = 'naak-studio header';
}
