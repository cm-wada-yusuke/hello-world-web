import { TestBed } from '@angular/core/testing';

import { GreetingUseCaseService } from './greeting-use-case.service';

describe('GreetingUseCaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GreetingUseCaseService = TestBed.get(GreetingUseCaseService);
    expect(service).toBeTruthy();
  });
});
