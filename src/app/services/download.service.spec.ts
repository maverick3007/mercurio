/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { DownloadService } from './download.service';

describe('Download Service', () => {
  beforeEachProviders(() => [DownloadService]);

  it('should ...',
      inject([DownloadService], (service: DownloadService) => {
    expect(service).toBeTruthy();
  }));
});
