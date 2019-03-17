import { Component, ViewChild, TemplateRef } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { ngxLoadingAnimationTypes, NgxLoadingComponent } from 'ngx-loading';

const headers = new HttpHeaders().set('Content-Type', 'application/json');
const PrimaryWhite = '#ffffff';
const SecondaryGrey = '#ccc';
const PrimaryRed = '#dd0031';
const SecondaryBlue = '#006ddd';

@Component({
    templateUrl: './app.contents.main.html',
    styleUrls: ['./app.contents.main.scss']
})

export class AppContentsMainComponent {

    @ViewChild('ngxLoading') ngxLoadingComponent: NgxLoadingComponent;
    @ViewChild('customLoadingTemplate') customLoadingTemplate: TemplateRef<any>;
    public ngxLoadingAnimationTypes = ngxLoadingAnimationTypes;
    public loading = true;
    public primaryColour = PrimaryWhite;
    public secondaryColour = SecondaryGrey;
    public coloursEnabled = false;
    public loadingTemplate: TemplateRef<any>;
    public config = {
        animationType: ngxLoadingAnimationTypes.none,
        primaryColour: this.primaryColour,
        secondaryColour: this.secondaryColour,
        tertiaryColour: this.primaryColour,
        backdropBorderRadius: '3px'
    };

    constructor(
        private http: HttpClient,
        private router: Router,
        private sanitizer: DomSanitizer) { }

    clickBtnGetAll() {
        this.router.navigate(['/diykit'], { queryParams: { page: 1 } });
    }
}
