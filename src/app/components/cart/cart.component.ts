import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Movie } from 'src/app/models/Movie';
import { Order } from 'src/app/models/Order';
import { IOrderRows } from 'src/app/models/IOrderRows';
import { GetOrdersService } from 'src/app/services/get-orders.service';
import { MovieService } from 'src/app/services/movie.service';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

    constructor(private movieService:MovieService, private getOrderService:GetOrdersService, private fb:FormBuilder) { }


    movies:Movie[] = [];
    cart:any = [];
    moviesInCart:Movie[] = [];

    orders:Order[] = [];
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
                if(this.orders[i].companyId == 9 && this.orders[i].id > this.orderId){
                    this.orderId = this.orders[i].id + 1;    
                }
            }

            
            

            for(let i = 0; i < this.moviesInCart.length; i++){
                

                if(this.orderRows.length > 0){

                    for(let j = 0; j < this.orderRows.length; j++){

                        if(this.moviesInCart[i].id == this.orderRows[j].productId){
                            
                            this.orderRows[j].amount++;
                        }

                        else{
                            this.orderRows.push({
                                id: 0,
                                productId: this.moviesInCart[i].id,
                                product: this.moviesInCart[i].name,
                                amount: 1,
                                orderId: this.orderId
                            });
                        }
                    }
                }

                
                else{
                    this.orderRows.push({
                        id: 0,
                        productId: this.moviesInCart[i].id,
                        product: this.moviesInCart[i].name,
                        amount: 1,
                        orderId: this.orderId
                    });
                }    
            }

            

            console.log(this.orderRows)
        });

        this.getOrderService.getData();
    }






    removeFromCart(id:number){
        this.cart.splice( this.cart.indexOf(id), 1 );
        localStorage.setItem('cart', JSON.stringify(this.cart));
        window.location.reload();
    }



    checkoutForm = this.fb.group({
        id:[''],
        companyId:['9'],
        created:[new Date],
        createdBy: ['', Validators.required],
        paymentMethod: ['', Validators.required],
        totalPrice: [''],
        status: [1],
        orderRows: ['']

    });

    onSubmit(){
        this.checkoutForm.controls['totalPrice'].setValue(this.totalPrice);
        this.checkoutForm.controls['id'].setValue(this.orderId);
        this.checkoutForm.controls['orderRows'].setValue(this.orderRows);

        console.log(this.checkoutForm.value)
    }


}
