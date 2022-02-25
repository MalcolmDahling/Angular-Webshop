import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Movie } from '../models/Movie';
import { IMovieService } from '../models/IMovieService';

@Injectable({
    providedIn: 'root'
})
export class MovieService implements IMovieService{

    constructor(private http:HttpClient) { }

    movies = new Subject<Movie[]>();
    movies$ = this.movies.asObservable();

    getData(){
        this.http
            .get<Movie[]>('https://medieinstitutet-wie-products.azurewebsites.net/api/products')
            .subscribe((data:Movie[]) => {
                this.movies.next(data);
            });
    }
}
