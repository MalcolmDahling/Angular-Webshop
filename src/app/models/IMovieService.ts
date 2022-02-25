import { Subject } from "rxjs";
import { IMovie } from "./IMovie";

export interface IMovieService{
    movies:Subject<IMovie[]>;
    getData():void;
}