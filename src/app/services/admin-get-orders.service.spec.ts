import { TestBed } from '@angular/core/testing';

import { AdminGetOrdersService } from './admin-get-orders.service';

describe('AdminGetOrdersService', () => {
  let service: AdminGetOrdersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminGetOrdersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
