import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { SendOrderService } from './send-order.service';

describe('SendOrderService', () => {
  let service: SendOrderService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: [HttpClientTestingModule]
    })
    TestBed.configureTestingModule({});
    service = TestBed.inject(SendOrderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
