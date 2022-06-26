import { HttpClient, HttpClientModule, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { throwError, catchError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MemberService {
  path = 'http://erb-homework.osc-fr1.scalingo.io/member';
  e = "OK";

  constructor(private http: HttpClient, private p: Platform) {

    console.log(this.p.platforms);

    if (this.p.is('android'))
      this.path = 'http://erb-homework.osc-fr1.scalingo.io/member';


  }

  private httpErrorHandler(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error("A client side error occurs. The error message is " + error.message);
    } else {
      console.error(
        "An error happened in server. The HTTP status code is " + error.status + " and the error returned is " + error.message);
    }

    return throwError("Error occurred. Pleas try again");
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  // deletemember(id: number) {
  //   return this.http.delete(this.path + '/' + id, this.httpOptions).pipe(catchError(this.httpErrorHandler));
  // }


  // addmember(member: any) {
  //   return this.http.post(this.path, member, this.httpOptions).pipe(catchError(this.httpErrorHandler));
  // }


  updatemember(member: any) {
    return this.http.put(this.path, member, this.httpOptions).pipe(catchError(this.httpErrorHandler));
  }

  listmember(id: number = -1) {
    if (id == -1)
      return this.http.get(this.path, this.httpOptions).pipe(catchError(this.httpErrorHandler));
    else
      return this.http.get(this.path + '/' + id, this.httpOptions).pipe(catchError(this.httpErrorHandler));

  }
}
