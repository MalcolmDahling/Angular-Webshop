import { Subject } from "rxjs";
import { ICategory } from "./ICategory";

export interface ICategoryService{
    categories:Subject<ICategory[]>;
    getData():void;
}