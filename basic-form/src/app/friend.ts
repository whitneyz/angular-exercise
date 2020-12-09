export class Friend {
  public firstName: string;
  public lastName: string;
  public email: string;
  public phoneNumber: any;


  constructor(firstName: string, lastName: string, email: string, phoneNumber: any) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phoneNumber = phoneNumber;
  }

  /* constructor(firstName: string, lastName: string, email: string, phoneNumber: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phoneNumber = phoneNumber;
  }*/
}


