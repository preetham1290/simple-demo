/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SimpleService } from './simple.service';

describe('SimpleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SimpleService]
    });
  });

  it('should ...', inject([SimpleService], (service: SimpleService) => {
    expect(service).toBeTruthy();
  }));
});
