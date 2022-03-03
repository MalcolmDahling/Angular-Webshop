import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Movie } from 'src/app/models/Movie';
import { IOrderRows } from 'src/app/models/IOrderRows';
import { GetOrdersService } from 'src/app/services/get-orders.service';
import { MovieService } from 'src/app/services/movie.service';
import { SendOrderService } from 'src/app/services/send-order.service';
import { IOrder } from 'src/app/models/IOrder';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

    constructor(private movieService:MovieService, private getOrderService:GetOrdersService, private sendOrderService:SendOrderService, private fb:FormBuilder) { }


    movies:Movie[] = [];
    cart:number[] = [];
    moviesInCart:Movie[] = [];

    orders:IOrder[] = [];
    orderId:number = 0;
    orderRows:IOrderRows[] = [];

    totalPrice:number = 0;


    ngOnInit(): void {

        if(localStorage.getItem('cart')){
            this.cart = JSON.parse(localStorage.getItem('cart')!);
        }

        this.movieService.movies$.subscribe((data) => {
            this.movies = data;

            for(let i = 0; i < this.movies.length; i++){

                for(let j = 0; j < this.cart.length; j++){

                    if(this.movies[i].id == this.cart[j]){
                        this.moviesInCart.push(this.movies[i]);
                        this.totalPrice += this.movies[i].price;
                    }

                }

            }

            this.ordersFunc();
        });
        
        this.movieService.getData();

    }



    ordersFunc(){
        this.getOrderService.orders$.subscribe((data) => {
            this.orders = data;

            for(let i = 0; i < this.orders.length; i++){  
                if(this.orders[i].companyId == 1337 && this.orders[i].id > this.orderId){
                    this.orderId = this.orders[i].id + 1;    
                }
            }


            for(let i = 0; i < this.moviesInCart.length; i++){
                this.orderRows.push({
                    id: 0,
                    productId: this.moviesInCart[i].id,
                    product: null,
                    amount: 1,
                    orderId: this.orderId
                });
            }
            

            this.orderRows = this.orderRows.filter((value:any, index:number) => {
                let _value = JSON.stringify(value);
                return index === this.orderRows.findIndex(obj => {
                    return JSON.stringify(obj) === _value; 
                });
            });

            

            let counts:any = {};


            for (const num of this.cart) {
            counts[num] = counts[num] ? counts[num] + 1 : 1;
            }


            for(let i = 0; i < this.orderRows.length; i++){
                this.orderRows[i].amount = counts[this.orderRows[i].productId];
            }


            console.log(this.orderRows);
        });

        this.getOrderService.getData();
    }






    removeFromCart(id:number){
        this.cart.splice( this.cart.indexOf(id), 1 );
        localStorage.setItem('cart', JSON.stringify(this.cart));
        //window.location.reload();
    }



    checkoutForm = this.fb.group({
        id:[''],
        companyId:['1337'],
        created:[new Date],
        createdBy: ['', Validators.required],
        paymentMethod: ['', Validators.required],
        totalPrice: [''],
        status: [0],
        orderRows: ['']

    });

    onSubmit(){
        this.checkoutForm.controls['totalPrice'].setValue(this.totalPrice);
        this.checkoutForm.controls['id'].setValue(this.orderId);
        this.checkoutForm.controls['orderRows'].setValue(this.orderRows);

        //clear cart
        this.cart = [];
        localStorage.setItem('cart', JSON.stringify(this.cart));

        this.sendOrderService.sendData(this.checkoutForm.value);
    }


}
