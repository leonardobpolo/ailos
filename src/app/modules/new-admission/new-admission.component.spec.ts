import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';

import { NewAdmissionComponent } from './new-admission.component';

describe('NewAdmissionComponent', () => {
  let component: NewAdmissionComponent;
  let fixture: ComponentFixture<NewAdmissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        NewAdmissionComponent
      ],
      imports: [
        ReactiveFormsModule,
        NgxMaskModule.forRoot()
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewAdmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('searchCpf function', () => {
    describe('if cpf is invalid', () => {
      beforeEach(() => {
        component.errorMessage = null;

        component.cpfData = {
          name: 'NAME_MOCK',
          cpfSituation: true,
          applicationAccount: {
            bank: 'BANK_MOCK',
            account: 888888,
            digit: 8
          },
          currentAccount: {
            bank: 'BANK_MOCK',
            account: 888888,
            digit: 8
          }
        };

        component.searchCpf();
      });

      it('should set errorMessage', () => {
        expect(component.errorMessage).toBe('O CPF informado é inválido.');
      });

      it('should set cpfData as null', () => {
        expect(component.cpfData).toBeNull();
      });
    });

    describe('if cpf valid', () => {
      beforeEach(() => {
        component.errorMessage = null;
        component.cpfData = null;

        component.searchForm.controls.cpf.setValue('41154131823');

        component.searchCpf();
      });

      it('should set errorMessage as null', () => {
        expect(component.errorMessage).toBeNull();
      });

      it('should set cpfData', () => {
        expect(component.cpfData).toEqual({
          name: 'Mariane de Souza Oliveira',
          cpfSituation: true,
          applicationAccount: {
            bank: 'Cooperativa Viacredi',
            account: 557932,
            digit: 4
          },
          currentAccount: {
            bank: 'Cooperativa Viacredi',
            account: 557932,
            digit: 4
          }
        });
      });
    });
  });

  describe('resetSearch function', () => {
    beforeEach(() => {
      component.errorMessage = 'ERROR_MOCK';
      component.cpfData = {
        name: 'NAME_MOCK',
        cpfSituation: true,
        applicationAccount: {
          bank: 'BANK_MOCK',
          account: 888888,
          digit: 8
        },
        currentAccount: {
          bank: 'BANK_MOCK',
          account: 888888,
          digit: 8
        }
      };

      component.searchForm.controls.cpf.setValue('88888888888');

      component.resetSearch();
    });

    it('should reset searchForm', () => {
      expect(component.searchForm.controls.cpf.value).toBeNull();
    });

    it('should reset errorMessage', () => {
      expect(component.errorMessage).toBeNull();
    });

    it('should reset cpfData', () => {
      expect(component.cpfData).toBeNull();
    });
  });
});
