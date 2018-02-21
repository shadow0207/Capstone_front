import { Injectable } from '@angular/core';

import{Http} from '@angular/http'
@Injectable()
export class CircleService {

  constructor(private http:Http) { }

  private CIRCLE_API_BASE_URL:string = "http://localhost:8081/ActivityStream-step6-CircleService/api/circle";
  
  getCircles() {
    console.log(this.http.get(this.CIRCLE_API_BASE_URL)+"api");
    return this.http.get(this.CIRCLE_API_BASE_URL);
  }
}
