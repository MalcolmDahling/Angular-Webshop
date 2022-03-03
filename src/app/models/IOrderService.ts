import { Subject } from "rxjs";
import { IOrder } from "./IOrder";

export interface IOrderService{
    orders:Subject<IOrder[]>;
    getData():void;
}