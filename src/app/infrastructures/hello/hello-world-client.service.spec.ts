import { TestBed } from '@angular/core/testing';

import { HelloWorldClientService } from './hello-world-client.service';

describe('HelloWorldClientService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HelloWorldClientService = TestBed.get(HelloWorldClientService);
    expect(service).toBeTruthy();
  });
});
