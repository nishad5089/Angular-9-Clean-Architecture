export class MasterModel {
  id: string;
  createdBy: string;
  updatedBy: string;
  status: string;
  autocomplete: string;
  updatedOn: string;
  createdOn: string;

  setAutocomplete(value: string): void {
    this.autocomplete =  value;
  }

}
