import { TestBed } from '@angular/core/testing';

import { ApiDataServiceService } from './api-data-retrieval.service';

describe('ApiDataServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiDataServiceService = TestBed.get(ApiDataServiceService);
    expect(service).toBeTruthy();
  });
});
