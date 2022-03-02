import { Component, OnInit } from '@angular/core';
import { IOrder } from 'src/app/models/IOrder';
import { AdminGetOrdersService } from 'src/app/services/admin-get-orders.service';
import { DeleteOrderService } from 'src/app/services/delete-order.service';

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

    constructor(private adminGetOrdersService:AdminGetOrdersService, private deleteOrderService:DeleteOrderService) { }

    orders:IOrder[] = [];

    ngOnInit(): void {
        this.adminGetOrdersService.orders$.subscribe((data) => {
            this.orders = data;
        });

        this.adminGetOrdersService.getData();
    }


    removeOrder(orderId:number){
        this.deleteOrderService.deleteData(orderId);
    }

}
