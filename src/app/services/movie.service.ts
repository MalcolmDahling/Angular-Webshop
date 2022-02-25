import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IMovie } from '../models/IMovie';
import { IMovieService } from '../models/IMovieService';

@Injectable({
     providedIn: 'root'
})
export class MovieService implements IMovieService{

    constructor(private http:HttpClient) { }

    movies = new Subject<IMovie[]>();
    movies$ = this.movies.asObservable();

    getData(){
        this.http
            .get<IMovie[]>('https://medieinstitutet-wie-products.azurewebsites.net/api/products')
            .subscribe((data:IMovie[]) => {
                this.movies.next(data);
            });
    }
}
