import { HttpClientTestingModule } from '@angular/common/http/testing';

import { TestBed } from '@angular/core/testing';

import { AdminGetOrdersService } from './admin-get-orders.service';

describe('AdminGetOrdersService', () => {
  let service: AdminGetOrdersService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: [HttpClientTestingModule]
    })
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminGetOrdersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
