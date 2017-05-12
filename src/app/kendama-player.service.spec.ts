import { TestBed, inject } from '@angular/core/testing';

import { KendamaPlayerService } from './kendama-player.service';

describe('KendamaPlayerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KendamaPlayerService]
    });
  });

  it('should ...', inject([KendamaPlayerService], (service: KendamaPlayerService) => {
    expect(service).toBeTruthy();
  }));
});
