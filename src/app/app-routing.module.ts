import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { CartComponent } from './components/cart/cart.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
    {path:'', component:HomeComponent },
    {path:'admin', component:AdminComponent },
    {path:'cart', component:CartComponent },
    {path:'products', component:ProductsComponent },
    {path:'categories', component:CategoriesComponent},
    {path:'productDetails/:id', component:ProductDetailsComponent },
    {path:'**', component:NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
