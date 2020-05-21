/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { OrganizerServiceService } from './organizer-service.service';

describe('Service: OrganizerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrganizerServiceService]
    });
  });

  it('should ...', inject([OrganizerServiceService], (service: OrganizerServiceService) => {
    expect(service).toBeTruthy();
  }));
});
