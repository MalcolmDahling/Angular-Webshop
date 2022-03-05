import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { CartComponent } from './cart.component';

describe('CartComponent', () => {
    let component: CartComponent;
    let fixture: ComponentFixture<CartComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
        declarations: [ CartComponent ],
        imports: [HttpClientTestingModule, ReactiveFormsModule]
        })
        .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CartComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });


    it('should test removing from cart', () => {
        component.cart.push(76); //The Dark Knight ID

        expect(component.cart.length).toBe(1);

        component.removeFromCart(76);

        expect(component.cart.length).toBe(0);
    });
});
