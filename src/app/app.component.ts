import { Component, ViewChild, TemplateRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ngxLoadingAnimationTypes, NgxLoadingComponent } from 'ngx-loading';

const PrimaryWhite = '#ffffff';
const SecondaryGrey = '#ccc';
const PrimaryRed = '#dd0031';
const SecondaryBlue = '#006ddd';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
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

    constructor(private sanitizer: DomSanitizer) { }
}
