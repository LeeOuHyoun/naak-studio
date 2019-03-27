import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LoadingServices {

    private isLoading = false;

    get loading() {
        return this.isLoading;
    }
    set loading(value) {
        this.isLoading = value;
    }
    startLoading() {
        this.isLoading = true;
    }
    stopLoading() {
        this.isLoading = false;
    }
}
