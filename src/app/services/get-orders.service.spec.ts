import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { GetOrdersService } from './get-orders.service';

describe('GetOrdersService', () => {
  let service: GetOrdersService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: [HttpClientTestingModule]
    })
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetOrdersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
