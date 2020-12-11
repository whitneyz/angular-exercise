import {HttpClient} from "@angular/common/http";

export class Friend {
  public firstName: string;
  public lastName: string;
  public email: string;
  public phoneNumber: any;
  public language: [];
  private http: HttpClient;


  constructor(firstName: string, lastName: string, email: string, phoneNumber: number, language: []) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.language = language;
  }

  /* constructor(firstName: string, lastName: string, email: string, phoneNumber: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phoneNumber = phoneNumber;
  }*/
}



