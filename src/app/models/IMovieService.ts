import { Subject } from "rxjs";
import { Movie } from "./Movie";

export interface IMovieService{
    movies:Subject<Movie[]>;
    getData():void;
}