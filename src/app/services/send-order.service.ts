import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IOrder } from '../models/IOrder';

@Injectable({
  providedIn: 'root'
})
export class SendOrderService {

    constructor(private http:HttpClient) { }

    sendData(order:IOrder){
        this.http
        .post<IOrder>('https://medieinstitutet-wie-products.azurewebsites.net/api/orders', order)
        .subscribe((data) => {
            console.log(data);
        });
 
        console.log(order);
    }
}
