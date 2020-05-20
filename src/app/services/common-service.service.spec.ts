/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CommonServiceService } from './common-service.service';

describe('Service: CommonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommonServiceService]
    });
  });

  it('should ...', inject([CommonServiceService], (service: CommonServiceService) => {
    expect(service).toBeTruthy();
  }));
});
