import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Fruit } from './Fruit';
import { Observable } from "rxjs/Rx";
import 'rxjs/Rx';

let url = "http://localhost:3000/list";
let headers = new Headers({ "Content-Type": "application/json" });

@Injectable()
export class FruitService {

  constructor(private http: Http) { }

  getFruits(): Promise<Fruit[]> {

    return this.http.get(
      url,
      headers
     )
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    if (res.status < 200 || res.status >= 300) {
      throw new Error('Bad response status: ' + res.status);
    }

    let body = res.json();
    let arr: Array<Fruit> = [];
    body.forEach((el) => {
      let g = new Fruit();
      g.name = el.name;
      arr.push(g);
    })
    return arr || [];
  }

  private handleError(error: any) {
    // In a real world app, we might send the error to remote logging infrastructure
    let errMsg = error.message || 'Server error';
    console.error(errMsg); // log to console instead
    return Promise.reject(errMsg);
  }
}