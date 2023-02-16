import { TestBed } from '@angular/core/testing';

import { UtilsService } from './utils.service';

describe('UtilsService', () => {
  let service: UtilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});

    service = TestBed.inject(UtilsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('validateCpf function', () => {
    describe('when cpf is invalid', () => {
      it('should return false', () => {
        expect(service.validateCpf()).toBeFalse();
        expect(service.validateCpf('888')).toBeFalse();
        expect(service.validateCpf('00000000000')).toBeFalse();
        expect(service.validateCpf('11111111111')).toBeFalse();
        expect(service.validateCpf('22222222222')).toBeFalse();
        expect(service.validateCpf('33333333333')).toBeFalse();
        expect(service.validateCpf('44444444444')).toBeFalse();
        expect(service.validateCpf('55555555555')).toBeFalse();
        expect(service.validateCpf('66666666666')).toBeFalse();
        expect(service.validateCpf('77777777777')).toBeFalse();
        expect(service.validateCpf('88888888888')).toBeFalse();
        expect(service.validateCpf('99999999999')).toBeFalse();
        expect(service.validateCpf('12345678912')).toBeFalse();
      });
    });

    describe('when cpf is valid', () => {
      it('should return true', () => {
        expect(service.validateCpf('41154131823')).toBeTrue();
      });
    });
  });
});
