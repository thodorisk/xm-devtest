import { TestBed } from '@angular/core/testing';

import { RegistrationApiService } from './registration-api.service';

describe('ApiService', () => {
  let service: RegistrationApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistrationApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
