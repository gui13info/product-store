import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
    public httpClient = inject(HttpClient);
    public products: Array<any> = [];
    constructor() { }
    
    ngOnInit(): void {
        this.httpClient.get< Array<any>>('/api/products').subscribe({
            next: (data: Array<any>) => {
                this.products = data;
            }
        });
    }
}
