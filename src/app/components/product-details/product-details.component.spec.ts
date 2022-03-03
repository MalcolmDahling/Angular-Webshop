import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ProductDetailsComponent } from './product-details.component';

describe('ProductDetailsComponent', () => {
    let component: ProductDetailsComponent;
    let fixture: ComponentFixture<ProductDetailsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
        declarations: [ ProductDetailsComponent ],
        imports: [HttpClientTestingModule, RouterTestingModule]
        })
        .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ProductDetailsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });




    it('should test adding to cart', () => {
        expect(component.cart).toEqual([]);

        component.cart.push('76'); //The Dark Knight ID

        expect(component.cart).toEqual(['76']);
    });
});
