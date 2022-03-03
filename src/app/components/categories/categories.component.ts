import { Component, OnInit } from '@angular/core';
import { ICategory } from 'src/app/models/ICategory';
import { CategoryService } from 'src/app/services/category.service';

@Component({
    selector: 'app-categories',
    templateUrl: './categories.component.html',
    styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

    constructor(public service:CategoryService) { }

    categories:ICategory[] = [];

    ngOnInit(): void {
        this.service.categories$.subscribe((data) => {
            this.categories = data;
        });

        this.service.getData();
    }

}
