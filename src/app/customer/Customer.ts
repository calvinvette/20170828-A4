export class Customer {
  // private _customerId: number = -1; // Eventually DB Primary Key
  // private _phoneNumber: String = "";
  // private _email: String = "";
  // private _birthDate: Date = new Date(); // assume "now" until we know otherwise
  private _fullName: String = "";

  constructor(private _customerId: number = -1,
              private _firstName: string = "",
              private _middleName: string = "",
              private _lastName: string = "",
              private _email: String = "",
              private _phoneNumber: String = "",
              private _birthDate: Date = new Date()) {
    this._fullName = this._firstName + " " + this._middleName + " " + this._lastName;
  }

  get customerId(): number {
    return this._customerId;
  }

  set customerId(value: number) {
    this._customerId = value;
  }

  get phoneNumber(): String {
    return this._phoneNumber;
  }

  set phoneNumber(value: String) {
    this._phoneNumber = value;
  }

  get email(): String {
    return this._email;
  }

  set email(value: String) {
    this._email = value;
  }

  get birthDate(): Date {
    return this._birthDate;
  }

  set birthDate(value: Date) {
    // if (value.getFullYear() < 1990) {
    //   throw new RangeError("Birthdates before 1990 are not accepted! Bad Year: " + value.getFullYear());
    // }
    this._birthDate = value;
  }

  get fullName(): String {
    return this._fullName;
  }

  set fullName(value: String) {
    this._fullName = value;
  }

  get firstName(): string {
    return this._firstName;
  }

  set firstName(value: string) {
    this._firstName = value;
  }

  get middleName(): string {
    return this._middleName;
  }

  set middleName(value: string) {
    this._middleName = value;
  }

  get lastName(): string {
    return this._lastName;
  }

  set lastName(value: string) {
    this._lastName = value;
  }

  public get age() {
    let now: Date = new Date();
    return (now.getTime() - this.birthDate.getTime()) / (1000 * 3600 * 24
      * 365.25);
  }
}
