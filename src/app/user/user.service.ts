import { Injectable } from '@angular/core';
import{Http} from '@angular/http'

@Injectable()
export class UserService {

  constructor(private http:Http) { }
//  private USER_API_BASE_URL:string = "http://localhost:8084/api/user";
 private mock_user : string ="https://demo9793958.mockable.io/user";

  getUser() {
    console.log("check");
   // return this.http.get(this.USER_API_BASE_URL);
    return this.http.get(this.mock_user);
  }

}
