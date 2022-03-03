import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { DeleteOrderService } from './delete-order.service';

describe('DeleteOrderService', () => {
  let service: DeleteOrderService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: [HttpClientTestingModule]
    })
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteOrderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
