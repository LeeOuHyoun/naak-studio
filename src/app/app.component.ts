import { Component } from '@angular/core';
import * as $ from 'jquery';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    constructor() {
        this.getTitle();
    }
    title = 'naak-studio';
    public getTitle() {
        $.each(Array.of(' H', 'e', 'l', 'l', 'o'), (_index, item) => {
            this.title = this.title + item;
        });
    }
}
