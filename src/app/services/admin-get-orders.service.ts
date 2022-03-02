import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IAdminGetOrdersService } from '../models/IAdminGetOrdersService';
import { IOrder } from '../models/IOrder';

@Injectable({
    providedIn: 'root'
})
export class AdminGetOrdersService implements IAdminGetOrdersService{

    constructor(private http:HttpClient) { }

    orders = new Subject<IOrder[]>();
    orders$ = this.orders.asObservable();

    getData(){
        this.http
            .get<IOrder[]>('https://medieinstitutet-wie-products.azurewebsites.net/api/orders?companyId=1337')
            .subscribe((data:IOrder[]) => {
                this.orders.next(data);
            });
    }
}