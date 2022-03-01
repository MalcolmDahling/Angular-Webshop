import { Subject } from "rxjs";
import { Movie } from "./Movie";

export interface ISearchService{
    movies:Subject<Movie[]>;
    getData(searchString:string):void;
}