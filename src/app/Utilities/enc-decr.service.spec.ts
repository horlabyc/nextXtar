import { TestBed } from '@angular/core/testing';

import { EncDecrService } from './enc-decr.service';

describe('EncDecrService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EncDecrService = TestBed.get(EncDecrService);
    expect(service).toBeTruthy();
  });
});
