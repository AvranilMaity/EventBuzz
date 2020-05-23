/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { OrganizerService } from './organizer.service';

describe('Service: OrganizerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrganizerService]
    });
  });

  it('should ...', inject([OrganizerService], (service: OrganizerService) => {
    expect(service).toBeTruthy();
  }));
});
