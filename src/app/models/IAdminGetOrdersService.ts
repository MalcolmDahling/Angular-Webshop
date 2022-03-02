import { Subject } from "rxjs";
import { IOrder } from "./IOrder";

export interface IAdminGetOrdersService{
    orders:Subject<IOrder[]>;
    getData():void;
}