import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class DeleteOrderService {

    constructor(private http:HttpClient) { }

    deleteData(orderId:number){
        this.http
            .delete('https://medieinstitutet-wie-products.azurewebsites.net/api/orders?companyId=1337')
            .subscribe(() => {});
    }
}
