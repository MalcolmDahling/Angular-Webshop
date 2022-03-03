import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IOrder } from '../models/IOrder';
import { IOrderService } from '../models/IOrderService';

@Injectable({
    providedIn: 'root'
})
export class GetOrdersService implements IOrderService{

    constructor(private http:HttpClient) { }

    orders = new Subject<IOrder[]>();
    orders$ = this.orders.asObservable();

    getData(){
        this.http
            .get<IOrder[]>('https://medieinstitutet-wie-products.azurewebsites.net/api/orders')
            .subscribe((data:IOrder[]) => {
                this.orders.next(data);
            });
    }
}
