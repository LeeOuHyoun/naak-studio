import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LoadingServices {

    private _loading = false;

    get loading() {
        return this._loading;
    }
    set loading(value) {
        this._loading = value;
    }
    startLoading() {
        this.loading = true;
    }
    stopLoading() {
        this.loading = false;
    }
}
