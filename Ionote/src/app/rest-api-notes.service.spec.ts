import { TestBed } from '@angular/core/testing';

import { RestApiNotesService } from './rest-api-notes.service';

describe('RestApiNotesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RestApiNotesService = TestBed.get(RestApiNotesService);
    expect(service).toBeTruthy();
  });
});
