import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/Movie';
import { SearchService } from 'src/app/services/search.service';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

    constructor(private service:SearchService) { }

    movies:Movie[] = [];

    ngOnInit(): void {
    }


    search(searchString:string){
        this.service.movies$.subscribe((data) => {
            this.movies = data;

            console.log(data);
        });
        
        this.service.getData(searchString);   
    }
}