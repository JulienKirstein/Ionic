import { TestBed } from '@angular/core/testing';

import { RestApiCategoriesService } from './rest-api-categories.service';

describe('RestApiCategoriesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RestApiCategoriesService = TestBed.get(RestApiCategoriesService);
    expect(service).toBeTruthy();
  });
});
