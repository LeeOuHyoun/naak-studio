import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Data } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private http: HttpClient) { }

    getProductsByCategoryNo(category: string): any {
        const params = new HttpParams().set('category', category);
        return this.http.get<Data>('/api/products/findByCategory', { params: params }).pipe(
            catchError(err => of(err))
        );
    }
}
