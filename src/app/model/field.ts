export class Field {
  name: string;
  arguments?: any[];

  constructor(field) {
    if (field.arguments) {
      this.arguments = field.arguments;
    }

    this.name = field.name;
  }
}
