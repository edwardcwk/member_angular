import { TestBed } from '@angular/core/testing';

import { MessagepriorityService } from './message-priority.service';

describe('MessagePriorityService', () => {
  let service: MessagepriorityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessagepriorityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
