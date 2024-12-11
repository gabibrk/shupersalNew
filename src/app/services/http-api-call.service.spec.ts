import { TestBed } from '@angular/core/testing';

import { HttpApiCallService } from './http-api-call.service';

describe('HttpApiCallService', () => {
  let service: HttpApiCallService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpApiCallService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
