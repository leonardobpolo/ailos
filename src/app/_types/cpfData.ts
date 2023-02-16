import { BankAccount } from './bankAccount'

export interface CpfData {
  name: string;
  cpfSituation: boolean;
  applicationAccount: BankAccount;
  currentAccount: BankAccount;
}