import { Component, OnInit } from '@angular/core';
import { IMovie } from 'src/app/models/IMovie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private service:MovieService) { }

  movies:IMovie[] = [];

  ngOnInit(): void {
    this.service.movies$.subscribe((data) => {
        this.movies = data;
    });
    this.service.getData();
  }

}

