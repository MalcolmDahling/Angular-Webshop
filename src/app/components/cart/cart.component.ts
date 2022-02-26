import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/Movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

    constructor(private service:MovieService) { }


    movies:Movie[] = [];
    cart:any = [];
    moviesInCart:Movie[] = [];


    ngOnInit(): void {

        if(localStorage.getItem('cart')){
            this.cart = JSON.parse(localStorage.getItem('cart')!);
        }

        this.service.movies$.subscribe((data) => {
            this.movies = data;

            for(let i = 0; i < this.movies.length; i++){

                for(let j = 0; j < this.cart.length; j++){

                    if(this.movies[i].id == this.cart[j]){
                        this.moviesInCart.push(this.movies[i]);
                    }

                }

            }


        });
        
        this.service.getData();

    }




    removeFromCart(id:number){
        this.cart.splice( this.cart.indexOf(id), 1 );
        localStorage.setItem('cart', JSON.stringify(this.cart));
        window.location.reload();
    }

    placeOrder(){
        
    }

}
