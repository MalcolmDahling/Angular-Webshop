import { Subject } from "rxjs";
import { Order } from "./Order";

export interface IOrderService{
    orders:Subject<Order[]>;
    getData():void;
}