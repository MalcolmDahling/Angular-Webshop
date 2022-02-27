import { Subject } from "rxjs";
import { Order } from "./Order";

export interface IGetOrdersService{
    order:Subject<Order[]>;
    getData():void;
}