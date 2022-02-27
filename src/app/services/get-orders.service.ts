import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IOrderService } from '../models/IOrderService';
import { Order } from '../models/Order';

@Injectable({
    providedIn: 'root'
})
export class GetOrdersService implements IOrderService{

    constructor(private http:HttpClient) { }

    orders = new Subject<Order[]>();
    orders$ = this.orders.asObservable();

    getData(){
        this.http
            .get<Order[]>('https://medieinstitutet-wie-products.azurewebsites.net/api/orders')
            .subscribe((data:Order[]) => {
                this.orders.next(data);
            });
    }
}
