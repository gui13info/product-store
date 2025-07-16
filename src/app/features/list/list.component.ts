import { RouterLink } from '@angular/router';
import { Component, inject } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';

import { CardComponent } from './components/card/card.component';
import { ProductI } from '../../shared/interfaces/product.interface';
import { ProductsService } from '../../shared/services/products.service';

@Component({
    selector: 'app-list',
    standalone: true,
    imports: [CardComponent, RouterLink, MatButtonModule],
    templateUrl: './list.component.html',
    styleUrl: './list.component.scss',
})
export class ListComponent {
    public products: Array<ProductI> = [];
    public productsService = inject(ProductsService);

    constructor() { }

    ngOnInit(): void {
        this.productsService.getAllProducts().subscribe({
            next: (data: Array<ProductI>) => {
                this.products = data;
            },
        });
    }
}
