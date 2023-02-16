import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { UtilsService } from './../../_services/utils.service';

import { CpfData } from './../../_types/cpfData';

@Component({
  selector: 'app-new-admission',
  templateUrl: './new-admission.component.html',
  styleUrls: ['./new-admission.component.scss']
})
export class NewAdmissionComponent {
  constructor(
    private formBuilder: FormBuilder,
    private utilsService: UtilsService
  ) { }

  searchForm = this.formBuilder.group({
    cpf: ['', Validators.required]
  });
  
  errorMessage: string | null = null;
  cpfData: CpfData | null = null;

  searchCpf(): void {
    if (this.utilsService.validateCpf(this.searchForm.value.cpf)) {
      this.errorMessage = null;

      this.cpfData = {
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
      };
    } else {
      this.errorMessage = 'O CPF informado é inválido.';

      this.cpfData = null;
    }
  }

  resetSearch(): void {
    this.searchForm.reset();

    this.errorMessage = null;
    this.cpfData = null;
  }
}
