import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ICategory } from '../models/ICategory';
import { ICategoryService } from '../models/ICategoryService';

@Injectable({
    providedIn: 'root'
})
export class CategoryService implements ICategoryService{

    constructor(private http:HttpClient) { }

    categories = new Subject<ICategory[]>();
    categories$ = this.categories.asObservable();

    getData(){
        this.http
            .get<ICategory[]>('https://medieinstitutet-wie-products.azurewebsites.net/api/categories')
            .subscribe((data:ICategory[]) => {
                this.categories.next(data);
            });
    }
}
