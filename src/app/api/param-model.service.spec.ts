import { TestBed } from '@angular/core/testing';

import { ParamModelService } from './param-model.service';

describe('ParamModelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ParamModelService = TestBed.get(ParamModelService);
    expect(service).toBeTruthy();
  });
});
