import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';

describe('SearchComponent', () => {
    let component: SearchComponent;
    let fixture: ComponentFixture<SearchComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
        declarations: [ SearchComponent ],
        imports: [HttpClientTestingModule]
        })
        .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SearchComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });


    it('should test search', () => {
        component.search('star');

        setTimeout(()=>{

            expect(component.movies).toBe([
                {
                    "id": 101,
                    "name": "Star Wars",
                    "description": "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee, and two droids to save the galaxy from the Empire's world-destroying battle-station, while also attempting to rescue Princess Leia from the evil Darth Vader.",
                    "price": 99,
                    "imageUrl": "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,643,1000_AL_.jpg",
                    "year": 1977,
                    "added": "2016-05-20T00:00:00",
                    "productCategory": [
                        {
                        "categoryId": 5,
                        "category": ''
                        },
                        {
                        "categoryId": 8,
                        "category": ''
                        }
                    ]
                },
                {
                    "id": 104,
                    "name": "Star Wars: Episode V - The Empire Strikes Back",
                    "description": "After the rebels are overpowered by the Empire on their newly established base, Luke Skywalker begins Jedi training with Master Yoda. His friends accept shelter from a questionable ally as Darth Vader hunts them in a plan to capture Luke.",
                    "price": 99,
                    "imageUrl": "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,641,1000_AL_.jpg",
                    "year": 1980,
                    "added": "2016-02-29T00:00:00",
                    "productCategory": [
                        {
                        "categoryId": 5,
                        "category": ''
                        },
                        {
                        "categoryId": 8,
                        "category": ''
                        }
                    ]
                }

            ]);

        }, 1000);
    });
});
