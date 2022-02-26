import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICategory } from 'src/app/models/ICategory';
import { Movie } from 'src/app/models/Movie';
import { CategoryService } from 'src/app/services/category.service';
import { MovieService } from 'src/app/services/movie.service';

@Component({
    selector: 'app-product-details',
    templateUrl: './product-details.component.html',
    styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

    constructor(private router:Router, private movieService:MovieService, private categoryService:CategoryService) { }


    movies:Movie[] = [];
    productIndex:number = 0;

    categories:ICategory[] = [];
    productCategories:string[] = [];


    ngOnInit(): void {

        this.movieService.movies$.subscribe((data) => {
            this.movies = data;

            for(let i = 0; i < this.movies.length; i++){

                if( this.movies[i].id == parseInt( String(this.router.url.split('/')[2]) ) ){
                    this.productIndex = i;
                    break;
                }

            }







            this.categoryService.categories$.subscribe((data) => {
                this.categories = data;
    
                for(let i = 0; i < this.categories.length ; i++){
                    
                
                    for(let j = 0; j < this.movies[this.productIndex].productCategory.length; j++){
        
                        if(this.categories[i].id == this.movies[this.productIndex].productCategory[j].categoryId){
                            this.productCategories.push(this.categories[i].name);
                        }
        
                    }
        
                }
            });
    
            this.categoryService.getData();



            
        });
        
        this.movieService.getData();












    }

}
