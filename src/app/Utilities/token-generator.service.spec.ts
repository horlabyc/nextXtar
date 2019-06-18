import { TestBed } from '@angular/core/testing';

import { TokenGeneratorService } from './token-generator.service';

describe('TokenGeneratorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TokenGeneratorService = TestBed.get(TokenGeneratorService);
    expect(service).toBeTruthy();
  });
});
