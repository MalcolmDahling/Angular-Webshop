import { HttpClientTestingModule } from '@angular/common/http/testing';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';

import { MovieService } from './movie.service';

describe('MovieService', () => {
    let service: MovieService;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [HttpClientTestingModule]
        })
        TestBed.configureTestingModule({});
        service = TestBed.inject(MovieService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });


});
