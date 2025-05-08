import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { ProductI } from '../interfaces/product.interface';

@Injectable({
    providedIn: 'root',
})
export class ProductsService {
    public httpClient = inject(HttpClient);

    constructor() { }

    public getAllProducts(): Observable<Array<ProductI>> {
        return this.httpClient.get<Array<ProductI>>('/api/products');
    }
}
