import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICategory } from 'src/app/models/ICategory';
import { Movie } from 'src/app/models/Movie';
import { CategoryService } from 'src/app/services/category.service';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

    constructor(private router:Router, private movieService:MovieService, private categoryService:CategoryService) { }

    movies:Movie[] = [];
    moviesInCategory:Movie[] = [];


    ngOnInit(): void {
        this.movieService.movies$.subscribe((data) => {
            this.movies = data;


            for(let i = 0; i < this.movies.length; i++){

                for(let j = 0; j < this.movies[i].productCategory.length; j++){

                    if( this.movies[i].productCategory[j].categoryId == parseInt(this.router.url.slice(-1)) ){
                        this.moviesInCategory.push(this.movies[i]);
                    }

                    

                }

            }


        });


        this.movieService.getData();
    }

}
