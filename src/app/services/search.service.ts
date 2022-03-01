import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Movie } from "../models/Movie";
import { ISearchService } from "../models/ISearchService";

@Injectable({
    providedIn: 'root'
})
export class SearchService implements ISearchService{

    constructor(private http:HttpClient) { }

    movies = new Subject<Movie[]>();
    movies$ = this.movies.asObservable();

    getData(searchString:string){
        this.http
            .get<Movie[]>('https://medieinstitutet-wie-products.azurewebsites.net/api/search?searchText=' + searchString)
            .subscribe((data:Movie[]) => {
                this.movies.next(data);
            });
    }
}