import { TestBed } from '@angular/core/testing';

import { PaypalReturnService } from './paypal-return.service';

describe('PaypalReturnService', () => {
  let service: PaypalReturnService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaypalReturnService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
