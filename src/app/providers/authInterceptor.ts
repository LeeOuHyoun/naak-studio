import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { LoadingServices } from './loadingService';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    private activeRequests = 0;
    constructor(private loadingServices: LoadingServices) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (this.activeRequests === 0) {
            this.loadingServices.startLoading();
        }
        this.activeRequests++;
        return next.handle(request).pipe(
            finalize(() => {
                this.activeRequests--;
                if (this.activeRequests === 0) {
                    this.loadingServices.stopLoading();
                }
            })
        );
    }
}

