import { TestBed } from '@angular/core/testing';

import { BoardInterfaceService } from './board-interface.service';

describe('BoardInterfaceService', () => {
  let service: BoardInterfaceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoardInterfaceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
