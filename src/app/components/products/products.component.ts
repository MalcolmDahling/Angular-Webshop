import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/Movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

    constructor(private service:MovieService) { }

    movies:Movie[] = [];

    ngOnInit(): void {
        this.service.movies$.subscribe((data) => {
            this.movies = data;
        });
        
        this.service.getData();
    }

}

